import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        < App />
    </BrowserRouter>,
    document.querySelector('#root'));