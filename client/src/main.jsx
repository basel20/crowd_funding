import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import { StateContextProvider } from './context';
import App from './App';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli} activeChain="goerli" clientId="0543857f35a489dd783687398e74eea9" >
        <Router>
        <StateContextProvider>
            <App />
        </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)