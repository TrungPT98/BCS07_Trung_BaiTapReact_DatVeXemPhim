import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './redux/configStrore'
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BaiTapBookingTicket/>
    </Provider>

);

