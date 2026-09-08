import { useContext } from 'react';
import Popup from './Popup/Popup.tsx';
import Card from './Card/Card.tsx';
import avatar from '../../images/avatar.jpg';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function Main(props: MainProps): React.JSX.Element {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className='content'>
      <section className='profile page__section'>
        <div className='profile__avatar'>
          <img
            className='profile__avatar-img'
            src={currentUser?.avatar}
            alt={currentUser?.name}
          />
          <img className='profile__image' src={avatar} alt='Avatar' />
          <div className='profile__avatar-overlay'></div>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>{currentUser?.name}</h1>
          <button
            aria-label='Editar perfil'
            className='profile__edit-button'
            type='button'
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className='profile__description'>{currentUser?.about}</p>
        </div>
        <button
          aria-label='Agregar tarjeta'
          className='profile__add-button'
          type='button'
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className='cards page__section'>
        <ul className='cards__list'>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
