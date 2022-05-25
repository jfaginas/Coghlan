// Header ---------------------------------------------------------------------------------------------------

const encabezado = `
    <nav class="nav">
        <img src="./img/logo-szabo-sss.png" class="logo nav-link" alt="Logo Coghlan">
        <p class="animate__animated animate__flipInX tituloCoghlan">Coghlan</p>
        <button class="nav-toggle" aria-label="Abrir menú">
            <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="nav-menu">
            <li class="nav-menu-item">
                <a href="index.html" class="nav-menu-link nav-link">EL BARRIO</a>            
            </li>
            <li class="nav-menu-item">
                <a href="arte.html" class="nav-menu-link nav-link">ARTE</a>
            </li>
            <li class="nav-menu-item">
                <a href="contacto.html" class="nav-menu-link nav-link nav-menu-link_active">CONTACTO</a>
            </li>
        </ul>
    </nav>
`
document.getElementById("idHeader").innerHTML = encabezado;

const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

//-----------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------

// Footer ---------------------------------------------------------------------------------------------------

const pie = `
    <a class ="red-soc" href="https://www.instagram.com" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a class ="red-soc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    <a class ="red-soc" href="https://www.facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
`
document.getElementById("footerId").innerHTML = pie;