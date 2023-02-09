import "./App.css";
import Home from './pages/Home'
import SearchResults from './pages/SearchResult'
import Detail from './pages/Detail'
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import ErrorPage from "pages/Error";

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <section className="App-content">
            <GifsContextProvider>
                <Link to="/">
                  <img className="App-logo" alt='Giffy logo' src='/logo.png'/>
                </Link>
                <Routes>
                  <Route path="/" 
                    element={<Home />}
                    />
                  <Route 
                    path="/search/:keyword"
                    element={<SearchResults />}
                    />
                  <Route 
                    path="/gif/:id"
                    element={<Detail />}
                    />
                  <Route 
                    path="/404"
                    element={<ErrorPage />}
                    />
                  </Routes>
            </GifsContextProvider>
          </section>
        </div>
      </BrowserRouter>
  );
}

export default App;
