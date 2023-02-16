import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "hooks/useUser";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoginLoading, hasLoginError, isLogged, login } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`${username} ${password}`)
    login({ username, password });
    // navigate("/");
  };

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials ...</strong>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            onChange={(evt) => setUsername(evt.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(evt) => setPassword(evt.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  );
}
