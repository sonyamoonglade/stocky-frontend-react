import React from 'react';
import Layout from "./components/layout/Layout";
import StockList from "./components/stock-list/StockList";
import {useRoutes} from "./hooks/useRoutes";
import {useSelector} from "react-redux";
import {isAuthenticatedSelector} from "./redux/state/user/userSelectors";


function App() {

    const isAuthenticated = useSelector(isAuthenticatedSelector)

    const routedLayout = useRoutes(isAuthenticated)


    return (
    <div className="App">

        {routedLayout}

    </div>
    );
}

export default App;
