import UserContext from "context/UserContext";
import { useContext, useState, useCallback } from "react";
import loginService from "services/login";
import addFavService from "services/addFavService";

export default function useUser() {
  const { favs, jwt, setFavs, setJWT } = useContext(UserContext);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginService({ username, password })
        .then((jwt) => {
          window.sessionStorage.setItem("jwt", jwt);
          setJWT(jwt);
          setState({ loading: false, error: false });
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJWT]
  );

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then((favs) => setFavs(favs)) // same as writing setFavs
      .catch((err) => {
        console.error(err);
      });
  }, [jwt, setFavs]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  return {
    addFav,
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
