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
                <div>
                    <p>Mi carrera como desarrolladora web comenzó en 2007 en el departamento digital de una agencia de comunicación española.</p>
                    <p>Desde entonces, he colaborado con diversas agencias de marketing y diseño web participando en una gran variedad de proyectos digitales.</p>
                    <p>Mi vasta experiencia profesional me ha brindado una visión integral de los proyectos web, abarcando todas las etapas del proceso, desde la concepción inicial hasta el mantenimiento y la mejora continua.</p>
                    <p>Mi ámbito de especialización son las tecnologías front-end, aunque, con el tiempo, he ampliado mis habilidades hacia la experiencia de usuario y la gestión de proyectos.</p>
                    <p>Como profesional en un sector tan dinámico, me mantengo en constante evolución a través de la formación continua, siempre en busca de la optimización y la mejora en mi trabajo.</p>
                    <p className='parrafo-destacado'>Te invito a explorar mi portafolio, donde encontrarás algunos ejemplos de los proyectos en los que he tenido el privilegio de participar.</p>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;