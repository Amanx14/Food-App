import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

/* 
Header 
    -Logo
    -NavItems
Body
    -Search
    -Card Container
    -RestaurantCard
        IMG, Name Star Rating, cuisines, time of delivery
Footer
    -CopyRight
    -Links
    -Address
    -Contact
*/

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout/>);