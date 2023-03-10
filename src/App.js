import { BrowserRouter, Link, Route, Routes } from "react-router-dom"

import "./App.css";

import Home from './pages/Home'
import SearchResults from './pages/SearchResult'
import Detail from './pages/Detail'
import ErrorPage from "pages/Error";
import LoginPage from "pages/Login"
import RegisterPage from "pages/Register";

import Header from "components/Header";

import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "context/GifsContext";


function App() {

  return (
      <UserContextProvider>
        <BrowserRouter>
          <div className="App">
            <section className="App-content">
              <GifsContextProvider>
                  <Header />
                  <Link to="/">
                    <div className="App-logo-container">
                      <img className="App-logo-img" alt='Giffy logo' src='/app-logo.png'/>
                      <span className="App-logo-title">Giffy search app</span>
                    </div>
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
                      element={<LoginPage />}
                      />
                    <Route 
                      path="/register"
                      element={<RegisterPage />}
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
