import React, { useState } from "react"
import { useEffect } from "react"
import Area from "./Area"

export default function Listas(){
    const [info, setInfo] = useState()
    const [area, setArea] = useState("")
    const [input, setInput] = useState("") 
    const llamadaFetch = () => {
        fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setInfo(data)
        })
    } 

    const manejarCambio = (e) => {
        setArea(e.target.value)
    }

    const enviarInput = () => {
        setInput(area)
    }

    useEffect(llamadaFetch, [])
    
    return(        
        <div>
            <center>
            <input type="text"
            placeholder="Escribe aqui"
            onChange={manejarCambio}
            />
            <button onClick={enviarInput}>Enviar</button>
            <h5>{input}</h5>
            <Area onChange={setArea}/>
            <br />
            {area}
            
            {info ? info.map((dragon) => (
                    <ul key={dragon.id} style={{display: "flex", alignItems: "center", gap: "60px"}}>
                        <li style={{backgroundColor: "#000", color: "white"}}>{dragon.name}</li>
                        <img src={dragon.imageUrl} alt="Dragon Ball" style={{ objectFit: "contain", width: "400px", height: "400px", border: "3px solid black", borderRadius: "5px"}}/>
                    </ul>
            )): <h1>No hay dragon ball</h1>}
            </center>
        </div>

    )
}