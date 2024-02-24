import './PortfolioStyle.css';
import { FiExternalLink } from "react-icons/fi";
import sneakeracademy from '../../images/barcelonasneakersacademy.png';
import inmedia from '../../images/inmedia.jpg';
import magnificPlace from '../../images/maginificPlace.jpg';
import acfae from '../../images/acfae.jpg';
import agenciaSetting from '../../images/agenciaSetting.jpg';
import managersLab from '../../images/managersLab.jpg';
import centralParc from '../../images/centralParc.jpg';
import tecnicasFerreres from '../../images/tecnicasFerreres.jpg';
import ecoSerra from '../../images/ecoSerra.png';
import museuCinema from '../../images/MuseuCinema.png';

function Portfolio() {
    return (
        <div className='portfolio-contenedor'>
            <div className='portfolio-titulo'>
                <h3>Portfolio</h3>
            </div>
            <div className='portfolio-grid'>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://barcelonasneakersacademy.com/" rel="nofollow">
                            <img src={sneakeracademy} alt="Barcelona sneakers academy" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://barcelonasneakersacademy.com/" rel="nofollow">
                            Barcelonasneakersacademy.com <FiExternalLink />
                        </a></h4>
                        <p>La primera academia de sneakers en España. Desarrollo y maquetación web del diseño entregado por el cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>JavaScript</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://inmedia.es/" rel="nofollow">
                            <img src={inmedia} alt="Inmedia Solutions" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://inmedia.es/" rel="nofollow">Inmedia.es <FiExternalLink /></a></h4>
                        <p>Consultoria de comunicación especializada en Turismo. Desarrollé el sitio completo a partir de los esquemas y contenidos que entregó el cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>JavaScript</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://agenciasetting.com/" rel="nofollow">
                            <img src={agenciaSetting} alt="Agència Setting" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://agenciasetting.com/" rel="nofollow">Agenciasetting.com <FiExternalLink /></a></h4>
                        <p>Agencia de comunicación. Diseño y desarrollo de la web a partir de los textos y los objetivos del cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://www.acfae.es/" rel="nofollow">
                            <img src={acfae} alt="ACFAE" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://www.acfae.es/" rel="nofollow">Acfae.es <FiExternalLink /></a></h4>
                        <p>Asociación de Comerciantes de Fuegos Artificiales de España. Diseño y desarrollo de una nueva web con el objetivo de modernizar su presencia online.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://magnificplace.com/" rel="nofollow">
                            <img src={magnificPlace} alt="Magnific Place" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://magnificplace.com/" rel="nofollow">Magnificplace.com <FiExternalLink /></a></h4>
                        <p>Plataforma de promoción de áreas comerciales. El cliente quería mostrar su propuesta de una forma clara y sencilla. Creé esta web onepage a partir de los textos e imágenes entregados.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://centralparc.cat/" rel="nofollow">
                            <img src={centralParc} alt="Central Parc" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://centralparc.cat/" rel="nofollow">Centralparc.cat <FiExternalLink /></a></h4>
                        <p>Cooperativa agraria. Diseño y desarrollo web a partir de los objetivos del cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://managerslab.com/" rel="nofollow">
                            <img src={managersLab} alt="Managers Lab" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://managerslab.com/" rel="nofollow">Managerslab.com <FiExternalLink /></a></h4>
                        <p>Servicios de transformación digital para empresas. Diseño y desarrollo de la web a partir de los textos y los objetivos del cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <a target="_blank" href="https://tecnicasferreres.es/" rel="nofollow">
                            <img src={tecnicasFerreres} alt="Tecnicas Ferreres" />
                        </a>
                    </div>
                    <div className='portfolio-item-content'>
                        <h4><a target="_blank" href="https://tecnicasferreres.es/" rel="nofollow">Tecnicasferreres.es <FiExternalLink /></a></h4>
                        <p>Empresa distribuidora de productos industriales. Desarrollo de la web a partir del diseño entregado por el cliente.</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <img src={ecoSerra} alt="Eco-Serra" />
                    </div>
                    <div className='portfolio-item-content'>
                        <h4>EcoSerra</h4>
                        <p>Proyecto en desarrollo</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='portfolio-item'>
                    <div className='portfolio-item-screen'>
                        <img src={museuCinema} alt="Museu del Cinema" />
                    </div>
                    <div className='portfolio-item-content'>
                        <h4>Museu del cinema</h4>
                        <p>Proyecto en desarrollo</p>
                        <div className='stack-tech-portfolio'>
                            <ul>
                                <li><div>HTML</div></li>
                                <li><div>CSS</div></li>
                                <li><div>Diseño</div></li>
                                <li><div>WordPress</div></li>
                                <li><div>Elementor</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;