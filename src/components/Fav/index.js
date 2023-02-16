import useUser from "hooks/useUser";
import { useNavigate } from "react-router";
import './Fav.css'

export default function Fav({ id }) {
  const {isLogged, addFav, favs} = useUser()
  const navigate = useNavigate()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = (evt) => {
    if(!isLogged) return navigate('/login')
    addFav({id})
  };

  const [
    label,
    emoji
  ] = isFaved
  ? [
    'Remove Gif from favorites',
    'X'
  ] : [
    'Add Gif to favorites',
    'LOVE'
  ]

  return (
    <button className='gf-Fav' onClick={handleClick}>
      <span role="img" arial-label="Fav Gif">
        {emoji}
      </span>
    </button>
  );
}
