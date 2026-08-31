export default function EditAvatar(): React.JSX.Element {
  return (
    <form
      className='popup__form'
      id='edit-profile-form'
      name='edit-profile-form'
      noValidate
    >
      <input
        className='popup__input popup__input_type_name'
        name='name'
        id='name-input'
        placeholder='Nombre'
        type='text'
        required
        minLength={2}
        maxLength={40}
      />
      <span id='name-input-error' className='popup__input-error'></span>
      <input
        className='popup__input popup__input_type_description'
        name='description'
        id='description-input'
        placeholder='Acerca de mí'
        type='text'
        required
        minLength={2}
        maxLength={200}
      />
      <span id='description-input-error' className='popup__input-error'></span>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}
