import { Link } from 'react-router-dom'
import styles from './Inicio.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import whatsapp from '../assets/whatsapp_1.png';
import artesanal from '../assets/Artesanal.png';
import personalizado from '../assets/Personalizado.png';
import calidad from '../assets/Calidad.png';

import torta1 from '../assets/Torta_banner_1.png';
import torta2 from '../assets/Torta_banner_2.png';
import torta3 from '../assets/Torta_banner_3.png';
import torta4 from '../assets/Torta_banner_4.png';

export function Banner() {
    return (
        <div className={styles.banner_container}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                style={{ width: '100%', height: '100%', }}
            >
                <SwiperSlide>
                    <img src={torta1} alt="Torta 1" className={styles.banner} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={torta2} alt="Torta 2" className={styles.banner} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={torta3} alt="Torta 3" className={styles.banner} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={torta4} alt="Torta 4" className={styles.banner} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export function Inicio() {
    return (
        <>
            <section className={styles.hero_section}>
                <Banner />
                <div className={styles.hero_content}>
                    <a href="https://wa.me/34622217104?text=Hola!%20GelaPop%20Vi%20tu%20catalogo%20y%20me%20interesa%20comprar%20el%20siguiente%20producto..." target="_blank" rel="noreferrer" className={styles.order_button}>
                        <img src={whatsapp} alt="whatsapp" className={styles.whatsapp_icon} />
                        ¡Haz tu pedido ahora!
                    </a>
                    <div className={styles.features_container}>
                        <div className={`${styles.feature_card} ${styles.card_blue}`}>
                            <div className={`${styles.icon_circle} ${styles.circle_blue}`}>
                                <img src={artesanal} alt="100% Artesanal" className={styles.banner} />
                            </div>
                            <h3 className={styles.feature_title}>100%<br />Artesanal</h3>
                            <p className={styles.feature_text}>Dinos tu idea y la convertimos en una experiencia única. Fusionamos sabores únicos y arte personalizado</p>
                        </div>
                        <div className={`${styles.feature_card} ${styles.card_purple}`}>
                            <div className={`${styles.icon_circle} ${styles.circle_purple}`}>
                                <img src={personalizado} alt="Pedidos Personalizados" className={styles.banner} />
                            </div>
                            <h3 className={styles.feature_title}>Pedidos<br />Personalizados</h3>
                            <p className={styles.feature_text}>Ya sea para un postre especial o como el bocadito dulce ideal en tus fiestas. Las personalizamos totalmente: elige tu temática favorita, una fotografía especial, nombres o personajes. ¡El toque mágico para tus bautizos y cumpleaños! </p>
                        </div>
                        <div className={`${styles.feature_card} ${styles.card_blue}`}>
                            <div className={`${styles.icon_circle} ${styles.circle_blue}`}>
                                <img src={calidad} alt="Calidad Garantizada" className={styles.banner} />
                            </div>
                            <h3 className={styles.feature_title}>Calidad<br />Garantizada</h3>
                            <p className={styles.feature_text}>Respaldamos cada uno de nuestros productos con un sello de garantía total, asegurando que la frescura, el sabor y la perfección lleguen a ti exactamente como los imaginaste</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

