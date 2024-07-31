import { item } from "./item"
import { HomePage } from "./components/HomePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { ShopItemFunc } from "./components/ShopItemFunc/ShopItemFunc";
import { ShopItemClass } from "./components/ShopItemClass/ShopItemClass";

import React from "react";

function App() {
  return (

    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/func"  element={<ShopItemFunc item={item} />} />
            <Route path="/class"  element={<ShopItemClass item={item} />} />
        </Routes>
    </Router>
  )
}

export default App;
