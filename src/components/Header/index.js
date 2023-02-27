import { Link } from "react-router-dom";
import "./index.css";
import useUser from "hooks/useUser";

export default function Header() {
  //const isLogged = false;
  const { isLogged, logout } = useUser();

  const handleOnclick = (evt) => {
    evt.preventDefault()
    logout()
  }

  return (
    <header className="gf-header">
      {isLogged ? (
        <button onClick={handleOnclick}>Logout</button> // this should look like the anchor below
      ) : <>
          <Link to="/login">Login</Link>
          
          <Link to="/register">Register</Link>
        </>
      }
    </header>
  );
}
