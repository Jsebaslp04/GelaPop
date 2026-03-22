import React from 'react';
import styles from './FloatingWhatsApp.module.css';
import whatsappLogo from '../../assets/whatsapp_1.png';

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/34622217104?text=Hola!%20GelaPop%20Vi%20tu%20catalogo%20y%20me%20interesa%20comprar%20el%20siguiente%20producto..."
            className={styles.float}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat en WhatsApp"
        >
            <div className={styles.iconContainer}>
                <img src={whatsappLogo} alt="WhatsApp" className={styles.whatsappIcon} />
            </div>
            <span className={styles.tooltip}>¡Contáctanos!</span>
        </a>
    );
}
