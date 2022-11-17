import React from "react";

export default function Area({onChange}){
    return(
        <textarea onChange={(e) => onChange(e.target.value)}></textarea>
    )
}