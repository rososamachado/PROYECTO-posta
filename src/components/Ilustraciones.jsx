import "./estiloilustraciones.css"
import { Link } from 'react-router-dom'

const ilustraciones = () => {
    return (
        <div class="contenedor">
            <header class="header">
                <div class="title">
                    <h1>CABECINHA ILUSTRACIONES</h1>
                </div>
            </header>

            <div class="carrusel">
                <img class="mySlides" src="carrusel1.jpg" style={{ width: "100%" }} />
                <img class="mySlides" src="carrusel2.jpg" style={{ width: "100%" }} />
                <img class="mySlides" src="carrusel3.jpg" style={{ width: "100%" }} />

                <button class="button-left" onclick="plusDivs(-1)">&#10094;</button>
                <button class="button-right" onclick="plusDivs(1)">&#10095;</button>
            </div>

            <main class="contenido">
                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <Link to="http://127.0.0.1:5500/páginaendesarrollo.html"><img src="RE-vivos_señoras-churras2.jpg"
                            alt="" /></Link>
                    </div>

                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <Link to="#">RE-Vivos</Link>
                        </h2>
                    </div>
                    <p class="extracto">
                        RE-Vivos son simpáticos objetos que RE-viven en situaciones
                        literales, jugando con la coteidaneidad y literalidad.
                    </p>
                    <Link to="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Ver más</Link>
                </article>

                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <Link to="http://127.0.0.1:5500/páginaendesarrollo.html"><img src="Tina-&-Tuca4.jpg"
                            alt="" /></Link>
                    </div>

                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <Link to="#">Yo También Conocí a Tina Bahuer</Link>
                        </h2>
                    </div>
                    <p class="extracto">
                        Sobre esta tira llamada "Yo También Conocí a Tina Bahuer"
                        narran vivencias de forma simpática de ciertas situaciones
                        de la vida real.
                        Pueden encontrar personajes como Vicente, Codry, Betu, Gaspar
                        y a la misma Tina Bahuer.       </p>
                    <Link to="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Ver más</Link>
                </article>

                <article class="articulo">
                    <div class="contenedor-thumbnail">
                        <Link to="http://127.0.0.1:5500/páginaendesarrollo.html"><img src="HOMOfobia-posts_2021_4.jpg"
                            alt="" /></Link>
                    </div>

                    <div class="contenedor-texto">
                        <h2 class="titulo">
                            <Link to="#">Temáticas</Link>
                        </h2>
                    </div>
                    <p class="extracto">
                        Las temáticas representan en muchas ocasiones temas de interés
                        general para la sociedad. Además de representar fechas especiales.
                    </p>
                    <Link to="http://127.0.0.1:5500/páginaendesarrollo.html" class="btn-link">Ver más</Link>
                </article>
            </main>
            <footer>
                <nav class="menu">
                    <a href="https://www.instagram.com/cabecinhagram/" target="_blank">@cabecinhagram</a>
                    <a href="http://127.0.0.1:5500/formulariodecontacto.html">cabecinhailustraciones@gmail.com</a>
                </nav>
            </footer>
            <script src="./javailustraciones.js"></script>
        </div>
    )
}

export default ilustraciones