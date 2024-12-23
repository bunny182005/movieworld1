
import React, { createContext, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/main';
import Fav from './pages/fav';
import Popular from './pages/popular';
import { Layout } from './layout';

export const store = createContext();

const App = () => {
  const [fava, setFava] = useState([]);

  return (
    <div>
      <store.Provider value={[fava, setFava]}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route element={<Layout />}>
              <Route path="/popular" element={<Popular />} />
              <Route path="/fav" element={<Fav />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </store.Provider>
    </div>
  );
};

export default App;