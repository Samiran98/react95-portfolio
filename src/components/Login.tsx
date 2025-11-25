import { useState } from 'react';
import { useAuthStore } from '../store/auth';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = useAuthStore((state) => state.login);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!username.trim()) {
            setError('Username is required');
            return;
        }

        if (!password.trim()) {
            setError('Password is required');
            return;
        }

        const success = login(username, password);
        if (!success) {
            setError('Invalid username or password');
            setPassword('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin(e as any);
        }
    };

    return (
        <div className="login-container">
            {/* Left Panel with Logo */}
            <div className="login-left-panel">
                <div className="login-logo-section">
                    <img
                        src="src/assets/logo.png"
                        alt="Windows 95"
                        className="login-logo"
                    />
                    <h1 className="login-title">Welcome</h1>
                    <p className="login-subtitle">Portfolio OS v1.0</p>
                </div>
            </div>

            {/* Right Panel with Form */}
            <div className="login-right-panel">
                <div className="login-box">
                    <div className="login-titlebar">
                        <span>Windows 95 Login</span>
                    </div>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="login-form-group">
                            <label htmlFor="username" className="login-label">
                                User name:
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="login-input"
                                placeholder="Enter your name"
                                autoFocus
                            />
                        </div>

                        <div className="login-form-group">
                            <label htmlFor="password" className="login-label">
                                Password:
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="login-input"
                                placeholder="Enter password"
                            />
                        </div>

                        {error && (
                            <div className="login-error">
                                <p className="login-error-message">⚠️ {error}</p>
                            </div>
                        )}

                        <div className="login-checkbox">
                            <input type="checkbox" id="logon-domain" />
                            <label htmlFor="logon-domain">Logon using dial-up connection</label>
                        </div>

                        <div className="login-buttons">
                            <button type="submit" className="login-btn-ok">
                                OK
                            </button>
                            <button
                                type="button"
                                className="login-btn-cancel"
                                onClick={() => {
                                    setUsername('');
                                    setPassword('');
                                    setError('');
                                }}
                            >
                                Clear
                            </button>
                            <button type="button" className="login-btn-shutdown">
                                Shutdown
                            </button>
                        </div>
                    </form>

                    <div className="login-footer">
                        <p className="login-footer-text">
                            © 2024 Samiran's Portfolio | Powered by React & Windows 95 Vibes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;