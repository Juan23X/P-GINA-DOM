// Crear un nuevo elemento <style> y añadir estilos CSS
const styleElement = document.createElement('style');

styleElement.textContent = `

    body {

        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        

    }

    h1 {
        color: #000;
        text-align: center;
    }

    .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%
    }

    nav {
        background-color: #000;
        color: #fff;
        padding: 30px;
        width: 100%;
    }

    nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    nav ul li {
        display: inline;
        margin: 0 10px;
    }

    nav ul li a {
        text decoration: none;
        color: #fffff;
    }

    footer {
        background-color: #000;
        color: #fff;
        padding: 50px;
        text-align: center;
        width: 100%;
    }

    .body-content {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;
    }

    .body-content p {
        margin-right: 20px;
    }

    .body-content img {
        max-width: 100%;
        height: auto;
    }

`;

// Crear un nuevo elemento <div> para el contenido de la página
const contentElement = document.createElement('div');
contentElement.className = 'container';

// Crear un nuevo elemento <h1> para el encabezado
const headerElement = document.createElement('h1');
headerElement.textContent = 'TRACKLIB';

// Crear un menú
const navElement = document.createElement('nav');
const menuList = document.createElement('ul');
menuList.innerHTML = `

    <li><a href="https://cymatics.fm/pages/equinox-melody-collection-beta-pack">SAMPLES </a></li>
    <li><a href="https://cymatics.fm/">DRUM KIT </a></li>
    <li><a href="#">MEZCLA </a></li>
    <li><a href="#">MASTERING </a></li>

`;
navElement.appendChild(menuList);

// Crear un cuerpo con texto e imagen
const bodyElement = document.createElement('div');
bodyElement.className = 'body-content';
bodyElement.innerHTML = `

    <div>
        <p>Descarga tus packs como productor.</p>
    </div>

    <div>
        <img src="https://cymatics.fm/cdn/shop/files/Equinox_-_Beta_Pack_0cee7a33-abe9-49fd-8cc1-611e444193bd_440x.webp?v=1702057600" 
        alt="Placeholder Image">
    </div>

    <br/>
    <br/>
    <br/>

`;

// Crear un footer
const footerElement = document.createElement('footer');
footerElement.textContent = '© 2024 Todos los derechos reservados';

// Añadir elementos al contenido
contentElement.appendChild(headerElement);
contentElement.appendChild(navElement);
contentElement.appendChild(bodyElement);
contentElement.appendChild(footerElement);

// Añadir el contenido y los estilos al documento
document.head.appendChild(styleElement);
document.body.appendChild(contentElement);
