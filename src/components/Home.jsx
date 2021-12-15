import "./estilosposta.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div class="contenedor">
            <header class="header">
                <div class="title">
                    <h1>CABECINHA ILUSTRACIONES</h1>
                </div>
                <nav class="menu">
                    <a href="/ups">Sobre Mi</a>
                    <a href="/ilustraciones">Trabajos</a>
                    <a href="/contacto">Contactos</a>
                </nav>
            </header>

            <article class="articulo destacado">
                <div class="contenedor-texto">
                    <h2 class="titulo"><a href="#">hola CHE...</a></h2>
                    <p class="presentacion">
                        Soy Diseñadora e Ilustradora.
                        La idea es que conozcan un poco de mi trabajo, recomienden y que se llenen de historias.
                        Puede que algunas cosas que ilustro sean basadas en la vida real, ya que me dedico mucho a que
                        observar.
                    </p>
                    <a href="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Leer más</a>
                </div>
                <div class="contenedor-thumbnail">
                    <a href="#">
                        <img src="holache2.jpg" alt="" />
                    </a>
                </div>
            </article>

            <main class="contenido">
                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <a href="#"><img src="ilustraciones.jpg" alt="" /></a>
                    </div>
                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <a href="#">ILUSTRACIONES</a>
                        </h2>
                        <p class="extracto">
                            Por este lado, podrás encontrar algunas de las
                            ilutraciones que he realizado a lo largo de estos años.
                            ¡Espero les guste!
                        </p>
                        <a href="http://127.0.0.1:5500/ilustraciones.html" class="btn-link">Ver más</a>
                    </div>
                </article>

                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <a href="#"><img src="otrostrabajos.jpg" alt="" /></a>
                    </div>
                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <a href="#">OTROS TRABAJOS</a>
                        </h2>
                        <p class="extracto">
                            Con OTROS TRABAJOS hago referencia a encargos en especial
                            con imagen de marca, creación de Logos, entre otras cosas.
                            No todo son dibujitos...
                        </p>
                        <a href="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Ver más</a>
                    </div>
                </article>

                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <a href="#"><img src="saliendodelpapel.jpg" alt="" /></a>
                    </div>
                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <a href="#">SALIENDO del PAPEL</a>
                        </h2>
                        <p class="extracto">
                            SALIENDO del PAPEL, es siguiendo la técnica PaperCut
                            (Cortar papel, se puede traducir) puedo decir que el proceso
                            conlleva mucha concentración, pero en cuanto al resultado final
                            es muy, muy satisfactorio.
                            ¡Disfruten!
                        </p>
                        <a href="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Ver más</a>
                    </div>
                </article>
            </main>

            <aside class="sidebar">
                <div class="bio">
                    <p class="titulo">¡Hola de nuevo!</p>
                    <p>
                        Si te gusto mi trabajo puedes contactarme a través de los siguientes medios:
                    </p>
                </div>
                <nav class="menu">
                    <a href="https://www.instagram.com/cabecinhagram/" target="_blank">@cabecinhagram</a>
                    <a href="http://127.0.0.1:5500/formulariodecontacto.html">cabecinhailustraciones@gmail.com</a>
                </nav>
            </aside>
        </div>
    )
}

export default Home