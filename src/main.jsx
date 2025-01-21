import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {App} from './App.jsx'
import {store} from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={new QueryClient()}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)
