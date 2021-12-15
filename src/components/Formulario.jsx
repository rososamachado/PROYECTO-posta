import "./estilosformulario.css"
import { Link } from 'react-router-dom'

const Formulario = () => {
    function myFunction() {
        document.getElementById("myForm").submit();
    }
    return (
        <>
            <h1 className="titulo">Contáctate!</h1>

            <main className="form">
                <form id="myForm">
                    <form method="POST" action="http://localhost:3000/contacto"></form>
                    <fieldset>
                        <legend>Formulario:</legend>
                        <input id="name" type="text" name="name" placeholder="Nombre" />
                        <input id="lastName" type="text" name="lastName" placeholder="Apellido" />
                        <input id="email" type="text" name="email" placeholder="Correo electrónico" />
                        <textarea name="message" rows="10" cols="30"></textarea>
                        <input type="button" onclick="myFunction()" value="Enviar formulario" />
                    </fieldset>
                </form>
            </main>

            <footer>
                <nav className="menu">
                    <a href="https://www.instagram.com/cabecinhagram/" target="_blank">@cabecinhagram</a>
                    <a href="#">cabecinhailustraciones@gmail.com</a>
                </nav>
            </footer>
        </>
    )
}

export default Formulario
