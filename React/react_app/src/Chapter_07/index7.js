import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './Chapter_03/Library';
import Book from './Chapter_03/Book';

import Clock from './Chapter_04/Clock';
import CommentList from './Chapter_05/CommentList';

import NotificationList from './Chapter_06/NotificationList';
import Accommodate from './Accommodate';

//const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
    <React.StrictMode>
        <Accommodate />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
