import Topo from "../../componentes/Topo"
import Rodape from "../../componentes/Rodape"
import './estilo.css'

export default function Home(){
    return(
        <div id="Home">
            <Topo />
            <main>
               <section className="secao-banner">
                <div className="banner">
                    <h1>Sorvetes Artesanais</h1>
                </div>
               </section>
               
               <section className="secao-sabores">
                <figure>
                    <img src="assets/banner-sabores.jpg" alt="Sorvetes Artesanais" title="Sorvetes Artesanais"/>
                </figure>
                <div className="div-sabores">
                    <h2>Nossos Sabores</h2>
                    <span>Novos e Deliciosos!!</span>
                    <p>
                      Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                      gelateria todos os nossos produtos são naturais, à base de
                      frutas e sem nenhum conservante! Também temos opções sem lactose
                      e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                      ser delicioso e saudável ao mesmo tempo!
                    </p>
                </div>
               </section>

               <section className="secao-eventos">
                <div className="div-eventos">
                    <h2>Nossos Eventos</h2>
                    <span>Delícias com Sorvete</span>
                    <p>
                      Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
                      prontinhos para te atender e oferecer os melhores eventos com os melhores
                      sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                </div>
                <figure>
                    <img src="assets/eventos-image.jpg" alt="Eventos" title="Eventos"/>
                </figure>

               </section>

               <section className="secao-sobre">
                <figure>
                    <img src="assets/sobre-image.jpg" />
                </figure>
                <div className="div-sobre">
                    <h2>Sobre Nós</h2>
                    <span>Alegria em cada casquinha</span>
                    <p>
                      Venha tomar o melhor sorvete da região aqui com a gente! Nós
                      estamos há anos no mercado produzindo o que tem de melhor para o
                      nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                      uma visita e aproveite o melhor atendimento e o melhor sorvete
                       da cidade.
                    </p>
                </div>

               </section>
            </main>
            
            <Rodape />
            
        </div>
    )
}