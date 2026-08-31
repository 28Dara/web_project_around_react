 function Popups () {
   return (
    <>
     <div className="Popups popup" id="edit-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Editar perfil</h3>
          <form className="popup__form" id="edit-profile-form">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              id="name-input"
              placeholder="Nombre"
              type="text"
              required
              minLength={2}
              maxLength={40}
            />
            <span id="name-input-error" className="popup__input-error"></span>
            <input
              className="popup__input popup__input_type_description"
              name="description"
              id="description-input"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength={2}
              maxLength={200}
            />
            <span
              id="description-input-error"
              className="popup__input-error"
            ></span>
            <button className="button popup__button" type="submit">Guardar</button>
          </form>
        </div>
      </div>
      <div className="popup" id="new-card-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Nuevo lugar</h3>
          <form className="popup__form" id="new-card-form">
            <input
              className="popup__input popup__input_type_card-name"
              name="place"
              id="place-input"
              placeholder="Título"
              required
              type="text"
              minLength={2}
              maxLength={30}
            />
            <span id="place-input-error" className="popup__input-error"></span>
            <input
              className="popup__input popup__input_type_url"
              name="link"
              id="link-input"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span id="link-input-error" className="popup__input-error"></span>
            <button className="button popup__button" type="submit">Crear</button>
          </form>
        </div>
      </div>
      <div className="popup" id="image-popup">
        <div className="popup__content popup__content_content_image">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <img alt="" className="popup__image" src="#" />
          <p className="popup__caption"></p>
        </div>
      </div>
      <div className="popup" id="delete-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">¿Estás seguro?</h3>
          <button className="button popup__button" type="button">Sí</button>
        </div>
      </div>
      <div className="popup" id="avatar-popup">
        <div className="popup__content">
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
          ></button>
          <h3 className="popup__title">Cambiar foto de perfil</h3>
          <form className="popup__form" id="avatar-form">
            <input
              className="popup__input popup__input_type_avatar"
              name="avatar"
              id="avatar-input"
              placeholder="https://somewebsite.com/someimage.jpg"
              type="url"
              required
            />
            <span id="avatar-input-error" className="popup__input-error"></span>
            <button className="button popup__button" type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </>
   );
 };
 
 export default Popups;