import './App.css';

function App() {
    const links = [
        { label: 'GitHub', url: 'https://github.com/yourusername' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
        { label: 'Twitter', url: 'https://twitter.com/yourusername' },
        { label: 'Portfolio', url: 'https://yourwebsite.com' },
    ];

    return (
        <div className="App">
            <div className="card">
                <div className="profile">
                    <img
                        src="https://via.placeholder.com/120"
                        alt="Profile"
                        className="profile-pic"
                    />
                    <h1>Hi! My name is Yaun</h1>
                    <p className="bio">I explore new stuff ✨</p>
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
                    <p>✨ Made by Yaun ✨</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
