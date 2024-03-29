import React from 'react';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';
import Theme from './theme';

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Theme>
    );
}

export default App;
