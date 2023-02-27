import { useNavigate } from "react-router-dom";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I",
];

export default function ErrorPage() {
  const navigate = useNavigate();

  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div>
          <span>404</span>
          <br/>
          <span>Sometimes gettings lost isn't that bad</span>
          <br/>
          <img src={randomImage()} alt="alt-page-404" />
          <br/>
          <button onClick={handleOnClick}>Go back home</button>
        </div>
      </div>
    </>
  );
}
