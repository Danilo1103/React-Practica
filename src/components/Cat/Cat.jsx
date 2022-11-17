import React, { useState } from "react";
import { useEffect } from "react";

export default function Cat(){
    const GIPHY_API_KEY = "2cZkiFTqyiS79UdSapL6LHWlublpl7iy";
    const [catText, setCatText] = useState("")
    const [catGif, setCatGif] = useState("");
    
    const callGiphyAPI = (string) => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data.data[0].images.original.url)
            setCatGif(data.data[0].images.original.url)
        })
    }

    const callCat = () => {
        fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
            setCatText(data.fact)
            callGiphyAPI(data?.fact?.split(" ").slice(0, 3).join(" "));
            console.log(data.fact)
        });
    }

    useEffect(callCat, []);
    
    return(
        <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <img src={catGif} alt="Imagen" style={{ objectFit: "contain", width: "400px", height: "400px"}}/>
            <h1>{catText}</h1>
        </div>    
    )
}