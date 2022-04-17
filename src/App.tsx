import React from 'react';
import Layout from "./components/layout/Layout";
import StockList from "./components/stock-list/StockList";


function App() {



  return (
    <div className="App">
        <Layout >
            <StockList />
        </Layout>
    </div>
  );
}

export default App;
