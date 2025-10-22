import './App.css';
import avatar from './avatar.jpg';

function App() {
    const links = [
        { label: 'YouTube', url: 'https://www.youtube.com/@itsyaun' },
        { label: 'Instagram', url: 'https://www.instagram.com/yaun2000/' },
        { label: 'Tiktok', url: 'https://www.tiktok.com/@yaun2000' }
    ];

    return (
        <div className="App">
            <div className="card">
                <div className="profile">
                    {/*<img
                        src="/avatar.jpg"
                        alt="Profile"
                        className="profile-pic"
                    />*/}
                    <img src={avatar} alt="Profile" className="profile-pic" />
                    <h1>Hi! My name is Yaun</h1>
                    <p className="bio">Lifehacks, Crafts and Gadgets!</p>
                </div>

                {/*<div className="links-container">*/}
                    <div className="links">
                        {links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-btn"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                {/*</div>*/}

                <footer>
                    <p>✨ Made by Yaun, website still in progress ✨</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
