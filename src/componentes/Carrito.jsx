import { Link } from 'react-router-dom';
import styles from './Carrito.module.css';
import { useCart } from '../context/CartContext';

export const Carrito = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const totalPortions = cart.reduce((acc, item) => acc + item.portions * item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleWhatsAppOrder = () => {
        const orderDetails = cart.map(item => `${item.quantity}x ${item.name} (${item.portions} porciones) - Sabor: ${item.flavor}`).join('%0A');
        const message = `¡Hola Gela Pop! Me gustaría ordenar lo siguiente:%0A${orderDetails}%0A%0ATotal: €${totalPrice}`;
        window.open(`https://wa.me/34622217104?text=${message}`, '_blank');
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContainer}>
                <div className={styles.topBar}>
                    <Link to="/Gelatortas" className={styles.backLink}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Seguir comprando
                    </Link>
                </div>

                <div className={styles.cartCard}>
                    <div className={styles.cartHeader}>
                        <h2>Mi Carrito</h2>
                        <span className={styles.totalPortions}>{totalPortions} porciones</span>
                    </div>

                    <div className={styles.cartItems}>
                        {cart.length === 0 ? (
                            <p className={styles.emptyCart}>Tu carrito está vacío.</p>
                        ) : (
                            cart.map((item, index) => (
                                <div key={index} className={styles.cartItem}>
                                    <img src={item.image} alt={item.name} className={styles.itemImage} />
                                    <div className={styles.itemDetails}>
                                        <h3>{item.name}</h3>
                                        <p>Sabor: {item.flavor}</p>
                                        <div className={styles.itemPortions}>
                                            Porciones: <span className={styles.portionsBox}>{item.portions}</span>
                                        </div>
                                    </div>
                                    <div className={styles.itemActions}>
                                        <button onClick={() => removeFromCart(index)} className={styles.deleteBtn}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="currentColor" />
                                            </svg>
                                        </button>
                                        <span className={styles.itemPrice}>€{item.price * item.quantity}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {cart.length > 0 && (
                        <>
                            <div className={styles.cartTotalSection}>
                                <div className={styles.totalRow}>
                                    <h2>Total</h2>
                                    <h2>€{totalPrice}</h2>
                                </div>

                                <div className={styles.buttonsRow}>
                                    <button onClick={clearCart} className={styles.clearBtn}>
                                        Vaciar carrito
                                    </button>
                                    <button onClick={handleWhatsAppOrder} className={styles.whatsappBtn}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382C17.208 14.249 15.914 13.612 15.674 13.525C15.434 13.438 15.259 13.394 15.084 13.657C14.908 13.921 14.406 14.512 14.253 14.686C14.099 14.861 13.945 14.883 13.682 14.752C13.418 14.62 12.569 14.343 11.565 13.447C10.781 12.748 10.252 11.884 10.099 11.62C9.945 11.357 10.082 11.215 10.214 11.084C10.333 10.966 10.478 10.776 10.61 10.616C10.741 10.457 10.784 10.339 10.872 10.163C10.96 9.988 10.916 9.835 10.85 9.704C10.784 9.572 10.257 8.283 10.038 7.756C9.824 7.242 9.606 7.311 9.448 7.302C9.303 7.294 9.127 7.292 8.951 7.292C8.775 7.292 8.491 7.358 8.25 7.62C8.008 7.883 7.329 8.517 7.329 9.809C7.329 11.1 8.271 12.348 8.403 12.523C8.535 12.698 10.252 15.341 12.872 16.471C13.496 16.741 13.983 16.903 14.364 17.024C14.99 17.223 15.561 17.194 16.014 17.124C16.52 17.045 17.568 16.486 17.787 15.874C18.006 15.263 18.006 14.738 17.94 14.628C17.874 14.518 17.699 14.474 17.435 14.342V14.382ZM11.999 1.999C6.476 1.999 1.999 6.476 1.999 11.999C1.999 13.757 2.454 15.412 3.251 16.837L2 21.432L6.702 20.199C8.082 20.925 9.686 21.343 11.396 21.343H11.401C16.924 21.343 21.401 16.866 21.401 11.343C21.401 8.663 20.358 6.14 18.463 4.245C16.568 2.35 14.045 1.307 11.365 1.307L11.999 1.999Z" fill="currentColor" />
                                        </svg>
                                        Ordenar por WhatsApp
                                    </button>
                                </div>

                                <p className={styles.disclaimer}>
                                    Al hacer clic en "Ordenar por WhatsApp", se abrirá una conversación con nuestro número de WhatsApp con tu pedido pre-llenado.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
