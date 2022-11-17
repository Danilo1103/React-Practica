import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import User from "../User/User.jsx";

export default function Home(){
    const [result, setResult] = useState()
    const [info, setInfo] = useState()

    const buscarPersonaje = () => {
        fetch("https://dragon-ball-super-api.herokuapp.com/api/characters").then(res => {
            return res.json()
        }).then(res => {
            console.log(res)
            setResult(res)
        })
    }

    const searchAxios = async(req, res) => {
        const api = await axios({
            method: "get",
            url: "https://dragon-ball-super-api.herokuapp.com/api/characters"
        })
        setResult(api.data)
    }

    useEffect(() => {
        console.log(result)
    }, [result])

    return(
        <div>
            <User get={result} onChange={setInfo}/>
            <h1>{info ? info : null}</h1>
            <button onClick={buscarPersonaje}>Buscar con Fetch</button>
            <button onClick={searchAxios}>Buscar con Axios</button>
            <a href="/cat">Ir a la prueba</a>
            <br />
            <a href="/fetch">Ir a la llamada fetch</a>
            <br />
            <a href="/busqueda">ir a la busqueda</a>
        </div>
    )
}