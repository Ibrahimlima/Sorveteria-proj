import React from "react";
import './estilo.css';


export default function Rodape(){
    return(
        <footer>
            <div>
                <img src="assets/logo.png" alt="Gelateria" title="Gelateria"/>
                <div>
                    <h3>Endereço</h3>
                    <p>Av. Bernardino de Campos,98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>Contato</h3>
                    <p>info@meusite.com</p>
                    <p>tel: (11) 3434-3434</p>
                </div>
                <div>
                    <h3>Horários</h3>
                    <p>Aberto todos os dias</p>
                    <p>10:00 - 22:00</p>
                </div>

            </div>
            <div>
                <p>Gelateria. Orgulhosamente desenvolvida por "Bruno Barros"</p>
            </div>
        </footer>
    )
}