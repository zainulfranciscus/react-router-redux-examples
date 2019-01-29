import React from 'react';
import {render} from 'react-dom';
import CalculatorContainer from "./components/CalculatorContainer";
import {Provider} from 'react-redux';
import store from './redux/configureStore';

render((
        <Provider store={store}>
            <CalculatorContainer/>
        </Provider>
    ), document.getElementById('app')
);