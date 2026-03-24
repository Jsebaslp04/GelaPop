import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import gelaPopLogo from '../../assets/Gela_pop_1.png';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <img src={gelaPopLogo} alt="Gela Pop" className={styles.logoImg} />
                    <p className={styles.slogan}>Endulzando momentos especiales</p>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/sweet.outfit.2025?rdid=UREQdatjlKYXmRAF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ib967nbG%2F#" target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/geelapop/" target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://wa.me/34622217104?text=Hola!%20GelaPop%20Vi%20tu%20catalogo%20y%20me%20interesa%20comprar%20el%20siguiente%20producto..." target="_blank" rel="noreferrer" className={styles.socialLink}>
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.iconCircle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <h3 className={styles.columnTitle}>Ubicación</h3>
                    <p className={styles.columnText}>Toledo, Madrid - España</p>
                </div>

                <div className={styles.column}>
                    <div className={styles.iconCircle}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                    </div>
                    <h3 className={styles.columnTitle}>Contáctanos</h3>
                    <a href="https://wa.me/34622217104?text=Hola!%20GelaPop%20Vi%20tu%20catalogo%20y%20me%20interesa%20comprar%20el%20siguiente%20producto..." target="_blank" rel="noreferrer" className={styles.whatsappButton}>
                        <img src={whatsappIcon} alt="WhatsApp" className={styles.btnIcon} />
                        WhatsApp
                    </a>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.divider}></div>
                <p className={styles.copyright}>
                    Hecho con <span className={styles.heart}>❤</span> por gelapop © 2026
                </p>
            </div>
        </footer>
    );
}
