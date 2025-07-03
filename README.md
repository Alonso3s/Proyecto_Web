
# 🌊 Sitio Web de Turismo en el Golfo Dulce

Este proyecto es un sitio web interactivo e informativo sobre el turismo en el **Golfo Dulce**, diseñado utilizando **HTML5, CSS3 y JavaScript**. El objetivo principal es brindar a los usuarios una experiencia inmersiva donde puedan conocer las atracciones turísticas del área, registrarse en la plataforma, iniciar sesión para acceder a contenido personalizado y enviar consultas a través de un formulario de contacto con validaciones en JavaScript.

## Características principales
-  Registro de usuarios con validación de contraseña y confirmación mediante JavaScript.
-  Inicio de sesión validando usuario y contraseña (frontend).
- Formulario de contacto funcional con los campos:
  - Nombre
  - Correo electrónico
  - Asunto
  - Mensaje
- Validaciones de campos con JavaScript para asegurar la calidad de los datos ingresados.
- Envío real de correos electrónicos desde el formulario de contacto.
- Diseño atractivo, responsivo y centrado en la experiencia del usuario.

##  Estructura del proyecto
PROYECTO_WEB/
├── .vscode/ # Configuraciones del entorno 
├── css/
│ ├── estilos.css # Estilo general del sitio
│ ├── login.css # Estilos para la página de login
│ └── registrarse.css # Estilos para la página de registro
├── img/ # Imágenes utilizadas en el sitio
├── js/
│ ├── login.js # Lógica del inicio de sesión
│ ├── logout.js # Lógica del cierre de sesión
│ └── sign-in.js # Validación de registro
├── Aventura.html # Página sobre actividades de aventura
├── contacto.html # Formulario de contacto
├── Historia.html # Página sobre historia del Golfo Dulce
├── indexgolfo.html # Página principal del sitio web
├── Login.html # Página de inicio de sesión
├── Naturaleza.html # Página sobre naturaleza local
├── Playas.html # Página con información sobre playas
├── registrarse.html # Página de registro de usuarios
├── .gitignore # Archivos ignorados por Git
└── README.md # Este archivo

## Tecnologías utilizadas
- **HTML5** – Estructura del sitio web.
- **CSS3** – Diseño y estilos visuales.
- **JavaScript (JS)** – Lógica de validación, login y formularios.
- **Visual Studio Code** – Editor de desarrollo.

## Validaciones implementadas (JavaScript)
- Validación de correo electrónico.
- Confirmación de contraseña en registro.
- Verificación de campos vacíos.
- Reglas para nombre, asunto y mensaje en contacto.
- Simulación de login con usuario/contraseña (sin backend).

## 📬 Envío de correos
Envio correos reales desde el formulario de contacto mediante este servicio:
- [EmailJS](https://www.emailjs.com/)
Se realiza un script con las llaves y datos de acceso para recibir correos directamente desde la pagina.


## Cómo usar este proyecto
1. Clona este repositorio:
   ```bash
   git clone https://github.com/Alonso3s/Proyecto_Web.git
   cd PROYECTO_WEB-MAIN
2. Abre Login.html en tu navegador.   
3. Navega por las páginas del sitio, regístrate, inicia sesión y prueba el formulario de contacto.



👥 Autores
@Alonso3s – Alonso Estrada
@jorgee01 – Jorge Murillo
@Emma-AT – Emma A. Torres

📄 Licencia
Este proyecto fue realizado con fines educativos. Puedes modificarlo y reutilizarlo libremente.


