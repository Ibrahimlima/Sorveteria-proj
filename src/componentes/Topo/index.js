import React from "react";
import { Link } from "react-router-dom";
import './estilo.css'


export default function Topo(){
    return(
        <header>
            <div className="limitar">
                <img src="assets/logo.png" alt="Gelateria" title="Gelateria"/>
                <nav>
                    <Link className="link-topo" to= "/">Home</Link>
                    <Link className="link-topo" to= "/Sabores">Sabores</Link> 
                    <Link className="link-topo" to= "/Sobre">Sobre</Link>
                </nav>
            </div>

        </header>
    )
}