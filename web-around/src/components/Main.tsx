
  function Main() {
   return (
    <div className="main content">
<section className="profile page__section">
          <div className="profile__avatar-wrapper">
            <img
              className="profile__image"
              src="./images/avatar.jpg"
              alt="Avatar"
            />
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">Jacques Cousteau</h1>
            <button
              aria-label="Editar perfil"
              className="profile__edit-button"
              type="button"
            ></button>
            <p className="profile__description">Explorador</p>
          </div>
          <button
            aria-label="Agregar tarjeta"
            className="profile__add-button"
            type="button"
          ></button>
        </section>
        <section className="cards page__section">
          <ul className="cards__list"></ul>
        </section>
        <template id="card-template">
          <li className="card">
            <img className="card__image" src="#" alt="" />
            <button
              aria-label="Eliminar tarjeta"
              className="card__delete-button"
              type="button"
            ></button>
            <div className="card__description">
              <h2 className="card__title"></h2>
              <button
                aria-label="Botón Me gusta"
                className="card__like-button"
                type="button"
              ></button>
            </div>
          </li>
        </template>
        </div>
   );
 };

 export default Main;
