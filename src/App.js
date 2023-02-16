import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import "./App.css";

import Home from './pages/Home'
import SearchResults from './pages/SearchResult'
import Detail from './pages/Detail'
import ErrorPage from "pages/Error";
import Login from "pages/Login"

import Header from "components/Header";

import { UserContext, UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "./context/GifsContext";


function App() {

  return (
      <UserContextProvider>
        <BrowserRouter>
          <div className="App">
            <section className="App-content">
              <GifsContextProvider>
                  <Header />
                  <Link to="/">
                    <img className="App-logo" alt='Giffy logo' src='/logo.png'/>
                  </Link>
                  <Routes>
                    <Route path="/" 
                      element={<Home />}
                      />
                    <Route 
                      path="/search/:keyword/:rating?"
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
                    <Route 
                      path="/login"
                      element={<Login />}
                      />
                    </Routes>
              </GifsContextProvider>
            </section>
          </div>
        </BrowserRouter>
      </UserContextProvider>
  );
}

export default App;
