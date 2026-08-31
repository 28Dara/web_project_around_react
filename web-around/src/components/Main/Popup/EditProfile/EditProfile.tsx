export default function EditProfile(): React.JSX.Element {
  return (
    <form
      className='popup__form'
      id='avatar-form'
      name='avatar-form'
      noValidate
    >
      <input
        className='popup__input popup__input_type_avatar'
        name='avatar'
        id='avatar-input'
        placeholder='https://somewebsite.com/someimage.jpg'
        type='url'
        required
      />
      <span id='avatar-input-error' className='popup__input-error'></span>
      <button className='button popup__button' type='submit'>
        Guardar
      </button>
    </form>
  );
}
