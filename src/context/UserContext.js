import React, { useEffect, useState } from "react";
import getFavsService from "services/getFavs";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
  // children -> is what the provider is going to wrap
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if (!jwt) return setFavs([])
    getFavsService({jwt}).then((favs)=>setFavs(favs))
  }, [jwt]);

  return (
    <UserContext.Provider value={{ favs, jwt, setFavs, setJWT }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
