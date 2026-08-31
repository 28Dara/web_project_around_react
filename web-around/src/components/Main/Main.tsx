import { useState } from 'react';
import type { PopupConfig } from '../../types/types.ts';
import NewCard from './Popup/NewCard/NewCard.tsx';
import Popup from './Popup/Popup.tsx';
import EditProfile from './Popup/EditProfile/EditProfile.tsx';
import EditAvatar from './Popup/EditAvatar/EditAvatar.tsx';

export default function Main(): React.JSX.Element {
  const [popup, setPopup] = useState<PopupConfig | null>(null);

  const newCardPopup: PopupConfig = {
    title: 'Nuevo lugar',
    children: <NewCard />,
  };
  const editProfilePopup: PopupConfig = {
    title: 'Editar perfil',
    children: <EditProfile />,
  };
  const editAvatarPopup: PopupConfig = {
    title: 'Editar avatar',
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup: PopupConfig): void {
    setPopup(popup);
  }

  function handleClosePopup(): void {
    setPopup(null);
  }

  return (
    <main className='content'>
      <section className='profile page__section'>
        <div
          className='profile__avatar-wrapper'
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            className='profile__image'
            src='./images/avatar.jpg'
            alt='Avatar'
          />
          <div className='profile__avatar-overlay'></div>
        </div>
        <div className='profile__info'>
          <h1 className='profile__title'>Jacques Cousteau</h1>
          <button
            aria-label='Editar perfil'
            className='profile__edit-button'
            type='button'
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className='profile__description'>Explorador</p>
        </div>
        <button
          aria-label='Agregar tarjeta'
          className='profile__add-button'
          type='button'
          onClick={() => handleOpenPopup(newCardPopup)}
        />
      </section>
      <section className='cards page__section'>
        <ul className='cards__list'></ul>
      </section>
      <template id='card-template'>
        <li className='card'>
          <img className='card__image' src='#' alt='' />
          <button
            aria-label='Eliminar tarjeta'
            className='card__delete-button'
            type='button'
          ></button>
          <div className='card__description'>
            <h2 className='card__title'></h2>
            <button
              aria-label='Botón Me gusta'
              className='card__like-button'
              type='button'
            ></button>
          </div>
        </li>
      </template>
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
