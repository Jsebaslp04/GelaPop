import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";
import gela_pop from "../assets/Gela_pop_1.png";
import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import home from "../assets/home.png";
import torta from "../assets/torta_tres_leches.png";
import gelatorta from "../assets/gelatortas.png";
import encapsulados from "../assets/encapsulados.png";
import carrito from "../assets/shopping_cart.png";
import { useCart } from "../context/CartContext";

export const Menu = () => {
    const location = useLocation();
    const { cart } = useCart();

    const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={styles.bottomSection}>
                <Link to="/" className={`${styles.navLink} ${isActive("/") ? styles.active : ""}`}>
                    <span className={styles.navEmoji}><img src={home} alt="Inicio" /></span>
                    Inicio
                </Link>
                <Link to="/Gelatortas" className={`${styles.navLink} ${isActive("/Gelatortas") ? styles.active : ""}`}>
                    <span className={styles.navEmoji}><img src={gelatorta} alt="Gelatortas" /></span>
                    Gelatortas
                </Link>
                {/*<Link to="/Tortas_Tres_Leches" className={`${styles.navLink} ${isActive("/Tortas_Tres_Leches") ? styles.active : ""}`}>
                    <span className={styles.navEmoji}><img src={torta} alt="Tortas Tres Leches" /></span>
                    Tortas Tres Leches
                </Link>
                <Link to="/Encapsulados" className={`${styles.navLink} ${isActive("/Encapsulados") ? styles.active : ""}`}>
                    <span className={styles.navEmoji}><img src={encapsulados} alt="Encapsulados" /></span>
                    Encapsulados
                </Link>*/}
                <Link to="/carrito" className={`${styles.navLink} ${isActive("/carrito") ? styles.active : ""}`}>
                    <span className={styles.navEmoji} style={{ position: 'relative' }}>
                        <img src={carrito} alt="Carrito" />
                        {totalItems > 0 && (
                            <span className={styles.cartBadge}>{totalItems}</span>
                        )}
                    </span>
                    Carrito
                </Link>
            </nav>

            <header className={styles.header}>
                <div className={styles.topSection}>
                    <div className={styles.logoSection}>
                        <Link to="/">
                            <img src={gela_pop} alt="Gela Pop" className={styles.logoImg} />
                        </Link>
                    </div>
                    <div className={styles.socialSection}>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer" className={styles.iconBtn}><img src={facebook} alt="Facebook" className={styles.socialIcon} /></a>
                        <a href="https://www.instagram.com/geelapop/" target="_blank" rel="noreferrer" className={styles.iconBtn}><img src={instagram} alt="Instagram" className={styles.socialIcon} /></a>
                        <a href="https://wa.me/34622217104?text=Hola!%20GelaPop%20Vi%20tu%20catalogo%20y%20me%20interesa%20comprar%20el%20siguiente%20producto..." target="_blank" rel="noreferrer" className={styles.iconBtn}><img src={whatsapp} alt="WhatsApp" className={styles.socialIcon} /></a>
                    </div>
                </div>
            </header>
        </>
    );
};
