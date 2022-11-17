import React from "react"

export default function User({get, onChange}){
    return(
        <div>
            {get ? get.map((personajes) => (
                <div key={personajes.id}>
                    <h2>{personajes.name}</h2>
                    <img src={personajes.imageUrl} alt="Imagen" />
                </div>
            )): <div></div>}
            <textarea onChange={(e) => onChange(e.target.value)}></textarea>
        </div>
    )
}