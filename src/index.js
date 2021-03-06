import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './app/store';
import Test from './test';
import Canvas from './components/Canvas';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
                <Provider store={store}>
                    <Test />
                </Provider>
            </ThemeProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
