import './App.css';
import avatar from './avatar.jpg';
import { useState, useRef, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaAmazon } from 'react-icons/fa';

import eggCubeImg from './products_photos/egg_cuber.png';
import traditionalGonggiImg from './products_photos/traditional_gonggi.jpg';
import squidgameGonggiImg from './products_photos/squidgame_gonggi.png';
import bicPenImg from './products_photos/bic_pen.png';
import penSpinningImg from './products_photos/pen_spinning.png';

function App() {
    const [view, setView] = useState('socials');
    const socials = [
        { label: 'YouTube', url: 'https://www.youtube.com/@itsyaun', icon: <FaYoutube color="#FF0000" /> },
        { label: 'Instagram', url: 'https://www.instagram.com/yaun2000/', icon: <FaInstagram color="#E1306C" /> },
        { label: 'Tiktok', url: 'https://www.tiktok.com/@yaun2000', icon: <FaTiktok color="#000000" /> }
    ];

    const products = [
        { label: 'BIC Pens (Pen Bow, Penzooka, Pen Whistle)', url: 'https://amzn.to/4hVKD8d', image: bicPenImg },
        { label: 'Egg Cube Maker', url: 'https://amzn.to/47HY8VE', image: eggCubeImg },
        { label: 'Pen for Pen Spinning', url: 'https://amzn.to/4oNaSAv', image: penSpinningImg },
        { label: 'Squid Game Gonggi', url: 'https://amzn.to/4oSFNeu', image: squidgameGonggiImg },
        { label: 'Traditional Gonggi', url: 'https://amzn.to/47UmdIV', image: traditionalGonggiImg},
    ];

    const linksToShow = view === 'socials' ? socials : products;

    const socialsRef = useRef(null);
    const productsRef = useRef(null);
    const [pillStyle, setPillStyle] = useState({});

    useEffect(() => {
        const activeRef = view === 'socials' ? socialsRef.current : productsRef.current;
        if (activeRef) {
            setPillStyle({
                width: `${activeRef.offsetWidth}px`,
                transform: `translateX(${activeRef.offsetLeft}px)`
            });
        }
    }, [view]);

    return (
        <div className="App">
            <div className="card">
                <div className="profile">
                    <img src={avatar} alt="Profile" className="profile-pic" />
                    <h1>Yaun</h1>
                    <p className="bio">Lifehacks, Crafts and Gadgets!</p>
                </div>

                <a
                    className="amazon-link"
                    href="https://www.amazon.com/shop/yaun"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaAmazon color="#ffffff" />
                </a>

                {/* Toggle buttons with sliding pill */}
                <div className="toggle-container">
                    <div className="toggle-buttons">
                        <button
                            ref={socialsRef}
                            className={view === 'socials' ? 'active' : ''}
                            onClick={() => setView('socials')}
                        >
                            Socials
                        </button>
                        <button
                            ref={productsRef}
                            className={view === 'products' ? 'active' : ''}
                            onClick={() => setView('products')}
                        >
                            Products
                        </button>
                        <div className="toggle-pill" style={pillStyle}></div>
                    </div>
                </div>

                {/* Links */}
                <div className="links">
                    {linksToShow.map((link) => (
                        <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-btn"
                        >
                            {view === 'socials' && link.icon && (
                                <span className="icon">{link.icon}</span>
                            )}
                            {view === 'products' && link.image && (
                                <img src={link.image} alt={link.label} className="product-thumb" />
                            )}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>

                <footer>
                    <p>✨ Made by Yaun, website still in progress ✨</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
