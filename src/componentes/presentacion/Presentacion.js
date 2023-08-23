import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import './PresentacionStyle.css';

function Presentacion() {
    return (
        <div className='presentacion-contenedor'>
            <div className='presentacion-datos-personales'>
                <h1>Noemí Armengod</h1>
                <h2>Front-end developer</h2>
                <p><a href="mailto:narmengod@gmail.com">narmengod@gmail.com</a></p>
                <div className='iconos-rrss'>
                    <a href="https://www.linkedin.com/in/noemiarmengod/" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/NoemiArmengod" target="_blank"><FaGithub /></a>
                </div>
            </div>
            <div className='presentacion-introduccion'>
                <p>Mi carrera como desarrolladora web comenzó en 2007 en el departamento digital de una agencia de comunicación española.</p>
                <p>Desde entonces, he colaborado con diversas agencias de comunicación y marketing, contribuyendo en una gran variedad de proyectos digitales.</p>
                <p>Mi extensa experiencia profesional me ha brindado una visión integral de los proyectos web, abarcando todas las etapas del proceso, desde la concepción inicial hasta el mantenimiento y la mejora continua.</p>
                <p>A lo largo de los años, me he especializado en tecnologías front - end de vanguardia, tales como HTML5, CSS3, JavaScript, React, Git, entre otras.</p>
                <p>Como profesional en un sector tan dinámico, me mantengo en constante evolución a través de una formación continua, siempre en busca de la optimización y la mejora constante en mi trabajo.</p>
                <p className='parrafo-destacado'>Te invito cordialmente a explorar mi portafolio, donde encontrarás ejemplos destacados de los proyectos en los que he tenido el privilegio de participar.</p>
            </div>
        </div>
    )
}

export default Presentacion;