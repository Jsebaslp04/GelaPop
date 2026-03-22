import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Gelatortas.module.css';
import Gela_Personalizada from '../assets/Products/Gela_Personalizada.png';
import Gela_Torta from '../assets/Products/Gela_torta.png';
import Encapsulado_de_Frutas from '../assets/Products/Encapsulado_de_frutas.png';
import Gela_gomitas from '../assets/Products/Gela_gomitas.png';
import Gela_mosaico from '../assets/Products/Gela_mosaico.png';
import Leche_asada from '../assets/Products/Leche_asada.png';
import Tentacion_de_baileys from '../assets/Products/Tentacion_de_baileys.png';
import Gelagurt from '../assets/Products/Gelagurt.png';
import Gelapaleta from '../assets/Products/Gelapaleta.png';
import { useCart } from '../context/CartContext';

const productsData = [
    {
        id: 1,
        name: 'Gela Personalizada',
        image: [Gela_Personalizada],
        description: 'Contiene: Tres sabores de mousse. Elige tu diseño recreado en gelatina.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        personalizations: ['Temática', 'Fotografía'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 35, 30: 45 }
    },
    {
        id: 2,
        name: 'Gela - Torta',
        image: [Gela_Torta],
        description: 'Contiene: Un biscocho, tres sabores de mousse y un relleno a elegir fruta o salsa.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        fillings: ['Nutella', 'Dulce de leche', 'Mermelada', 'Sirope', 'Coulis'],
        fruits: ['Durazno', 'Fresa', 'Kiwi', 'Uva', 'Piña'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 35, 30: 45 }
    },
    {
        id: 3,
        name: 'Encapsulado de Frutas',
        image: [Encapsulado_de_Frutas],
        description: 'Contiene: Tres sabores de mousse y tres frutas a elegir.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        fruits: ['Durazno', 'Fresa', 'Kiwi', 'Uva', 'Piña'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 35, 30: 45 }
    },
    {
        id: 4,
        name: 'Gela - Gomitas',
        image: [Gela_gomitas],
        description: 'Contiene: Tres sabores de mousse y relleno de gomitas.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        gomitas: ['Azucaradas', 'Acidas', 'Rellenas', 'Nubes', 'Regaliz', 'Liofilizadas', 'Moritas'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 35, 30: 45 }
    },
    {
        id: 5,
        name: 'Gela-Mosaico',
        image: [Gela_mosaico],
        description: 'Contiene: Mousse con base cremosa de tres leches y cubitos de gelatinas de cinco diferentes sabores.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        fruits: ['Durazno', 'Fresa', 'Kiwi', 'Uva', 'Piña'],
        decorations: ['Fruta', 'Topper (según ocasión)'],
        portions: [10, 20, 30],
        basePrices: { 10: 25, 20: 32, 30: 42 }
    },
    {
        id: 6,
        name: 'Leche Asada: La Receta de la Abuela',
        image: [Leche_asada],
        description: 'Tarta de Leche Asada: Textura densa pero ligera, infusionada con vainilla natural y una deliciosa salsa de caramelo dorado.',
        decorations: ['Fresas', 'Dulce de Leche', 'Sprinkles', 'Topper (según ocasión)'],
        portions: [10, 20, 30],
        basePrices: { 10: 25, 20: 32, 30: 42 }
    },
    {
        id: 7,
        name: 'Tentación de Baileys & Coffee Cream',
        image: [Tentacion_de_baileys],
        description: 'Combinamos la intensidad del Café Expreso con la suavidad y dulzura inconfundible de la Crema de Whisky Baileys. El final perfecto de un buen paladar.',
        decorations: ['Chispas de Chocolate al 70%', 'Sirope de Chocolate', 'Trozos de Avellana'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 32, 30: 42 }
    },
    {
        id: 8,
        name: 'GelaGurt',
        image: [Gelagurt],
        description: 'Armonía perfecta: Disfruta de la cremosidad del yogurt y la textura ligera de la gelatina. Contiene: Personalización con imagen, dos sabores de yogurt, dos sabores de gelatina y una fruta.',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        fruits: ['Durazno', 'Fresa', 'Kiwi', 'Uva', 'Piña'],
        portions: [10, 20, 30],
        basePrices: { 10: 27, 20: 32, 30: 42 }
    },
    {
        id: 9,
        name: 'GelaPaleta',
        image: [Gelapaleta],
        description: 'Nuestras gelatinas individuales personalizadas en presentación vaso o gelapaleta, son perfectas de postres, bocadito dulce, Petit para acompañamiento en tus: fiestas, bautizos, cumpleaños o sorpresas especiales. Ya que son deliciosos y completamente personalizadas con la temática de tu evento, fotografía, nombre o personaje favorito. Bajo pedido después de 12 unidades,valor individual',
        flavors: ['Fresa', 'Maracuya', 'Uva', 'Limón', 'Chicle', 'Coco', 'Vainilla', 'Pina', 'Frutos Rojos'],
        portions: [1],
        basePrices: { 1: 2.50 }
    },
];

const ProductCard = ({ product }) => {
    const [selectedPortions, setSelectedPortions] = useState(product.portions[0]);
    const [selectedFlavor, setSelectedFlavor] = useState(product.flavors ? product.flavors[0] : null);
    const [selectedPersonalization, setSelectedPersonalization] = useState(product.personalizations ? product.personalizations[0] : null);
    const [selectedFilling, setSelectedFilling] = useState(product.fillings ? product.fillings[0] : null);
    const [selectedFruit, setSelectedFruit] = useState(product.fruits ? product.fruits[0] : null);
    const [selectedGomitas, setSelectedGomitas] = useState(product.gomitas ? product.gomitas[0] : null);
    const [selectedDecoration, setSelectedDecoration] = useState(product.decorations ? product.decorations[0] : null);
    const [showAlert, setShowAlert] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false);
    const { addToCart } = useCart();

    const images = Array.isArray(product.image) ? product.image : [product.image];
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const price = product.basePrices[selectedPortions];

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            image: images[0],
            flavor: selectedFlavor,
            personalization: selectedPersonalization,
            portions: selectedPortions,
            price: price,
            quantity: 1
        });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer} onClick={() => setIsImageOpen(true)}>
                <img src={images[currentImgIndex]} alt={product.name} />

                {images.length > 1 && (
                    <>
                        <button
                            className={styles.sliderBtnLeft}
                            onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
                        >
                            &#10094;
                        </button>
                        <button
                            className={styles.sliderBtnRight}
                            onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); }}
                        >
                            &#10095;
                        </button>
                        <div className={styles.dotsContainer}>
                            {images.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`${styles.dot} ${idx === currentImgIndex ? styles.activeDot : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className={styles.zoomIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 7V13M7 10H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {isImageOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsImageOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeModalBtn} onClick={() => setIsImageOpen(false)}>
                            &times;
                        </button>
                        {images.length > 1 && (
                            <button
                                className={`${styles.sliderBtnLeft} ${styles.modalSliderBtnLeft}`}
                                onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
                            >
                                &#10094;
                            </button>
                        )}
                        <img src={images[currentImgIndex]} alt={product.name} />
                        {images.length > 1 && (
                            <button
                                className={`${styles.sliderBtnRight} ${styles.modalSliderBtnRight}`}
                                onClick={(e) => { e.stopPropagation(); setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); }}
                            >
                                &#10095;
                            </button>
                        )}
                    </div>
                </div>
            )}

            <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.name}</h3>

                {product.description && (
                    <p className={styles.productDescription}>{product.description}</p>
                )}

                {product.personalizations && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Personaliza</span>
                        <select
                            value={selectedPersonalization}
                            onChange={(e) => setSelectedPersonalization(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.personalizations.map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>
                )}

                {product.fillings && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Salsas</span>
                        <select
                            value={selectedFilling}
                            onChange={(e) => setSelectedFilling(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.fillings.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                )}

                {product.fruits && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Fruta</span>
                        <select
                            value={selectedFruit}
                            onChange={(e) => setSelectedFruit(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.fruits.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                )}

                {product.decorations && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Decoración</span>
                        <select
                            value={selectedDecoration}
                            onChange={(e) => setSelectedDecoration(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.decorations.map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                )}

                {product.gomitas && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Gomitas</span>
                        <select
                            value={selectedGomitas}
                            onChange={(e) => setSelectedGomitas(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.gomitas.map(g => (
                                <option key={g} value={g}>{g}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div className={styles.portionsSection}>
                    <span className={styles.label}>Porciones</span>
                    <div className={styles.portionsOptions}>
                        {product.portions.map(p => (
                            <button
                                key={p}
                                className={`${styles.portionBtn} ${selectedPortions === p ? styles.selected : ''}`}
                                onClick={() => setSelectedPortions(p)}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                {product.flavors && (
                    <div className={styles.flavorSection}>
                        <span className={styles.label}>Sabor</span>
                        <select
                            value={selectedFlavor}
                            onChange={(e) => setSelectedFlavor(e.target.value)}
                            className={styles.flavorSelect}
                        >
                            {product.flavors.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                )}

                <div className={styles.priceActionSection}>
                    <span className={styles.price}>€{price}</span>
                    <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                        + Agregar
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 3H4.5L6.5 17H19C19.55 17 20 16.55 20 16V9C20 8.45 19.55 8 19 8H6.5 M9 21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20C8.55228 20 9 20.4477 9 21ZM19 21C19 21.5523 18.552 22 18 22C17.448 22 17 21.5523 17 21C17 20.4477 17.448 20 18 20C18.552 20 19 20.4477 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {showAlert && (
                    <div className={styles.alert}>
                        ¡Añadido con éxito!
                    </div>
                )}
            </div>
        </div>
    );
}

export const Gelatortas = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContainer}>
                <div className={styles.topBar}>
                    <Link to="/" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Volver al inicio
                    </Link>
                </div>

                <div className={styles.productsGrid}>
                    {productsData.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};