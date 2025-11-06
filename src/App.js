import './App.css';
import avatar from './avatar.jpg';
import { useState, useRef, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaAmazon } from 'react-icons/fa';

import eggCubeImg from './products_photos/egg_cuber.png';

function App() {
    const [view, setView] = useState('socials'); // 'socials' or 'products'
    const socials = [
        { label: 'YouTube', url: 'https://www.youtube.com/@itsyaun', icon: <FaYoutube color="#FF0000" /> },
        { label: 'Instagram', url: 'https://www.instagram.com/yaun2000/', icon: <FaInstagram color="#E1306C" /> },
        { label: 'Tiktok', url: 'https://www.tiktok.com/@yaun2000', icon: <FaTiktok color="#000000" /> }
    ];


    const products = [
        { label: 'Egg Cube Maker', url: 'https://amzn.to/47HY8VE', image: eggCubeImg },
        { label: 'Squid Game Gonggi', url: 'https://amzn.to/4oSFNeu',  },
        { label: 'Traditional Gonggi', url: 'https://amzn.to/47UmdIV',  },
    ];

    const linksToShow = view === 'socials' ? socials : products;

    const socialsRef = useRef(null);
    const productsRef = useRef(null);
    const [pillStyle, setPillStyle] = useState({});

    // Update pill position whenever view changes
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
