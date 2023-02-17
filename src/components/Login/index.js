import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "hooks/useUser";
import "./Login.css";

export default function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoginLoading, hasLoginError, isLogged, login } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/")
      onLogin && onLogin()
    }
  }, [isLogged, navigate, onLogin]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`${username} ${password}`)
    login({ username, password });
    // navigate("/");
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {!isLoginLoading && (
        <form className="form" onSubmit={handleSubmit}>
          <label>
            username
            <input
              placeholder="username"
              onChange={(evt) => setUsername(evt.target.value)}
              value={username}
            />
          </label>
          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={(evt) => setPassword(evt.target.value)}
              value={password}
            />
          </label>

          <button className="btn">Login</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  );
}
