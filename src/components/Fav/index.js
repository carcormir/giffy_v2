import useUser from "hooks/useUser";
import { useState } from "react";
import { useNavigate } from "react-router";
import Modal from "components/Modal";
import Login from "components/Login";
import './Fav.css'

export default function Fav({ id }) {
  const [showModal, setShowModal] = useState(false);
  const {isLogged, addFav, favs} = useUser()
  const navigate = useNavigate()

  const isFaved = favs.some(favId => favId === id)

  const handleClick = (evt) => {
    if(!isLogged) return setShowModal(true)// We dont want to break the flow of navigating with -> navigate('/login')
    addFav({id})
  };

  const handleClose = () => {
    setShowModal(false)
  }

  const handleLogin = () => {
    setShowModal(false)
  }

  const [
    label,
    emoji
  ] = isFaved
  ? [
    'Remove Gif from favorites',
    `✖️`
  ] : [
    'Add Gif to favorites',
    `💜`
  ]

  return (
    <>
    <button className='gf-Fav' onClick={handleClick}>
      <span role="img" arial-label="Fav Gif">
        {emoji}
      </span>
    </button>
    {showModal && <Modal onClose={handleClose}> <Login onLogin={handleLogin}/> </Modal>}
    </>
  );
}
