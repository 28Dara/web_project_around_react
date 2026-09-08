import type { CardData, HandleCardClick } from '../../../types/types.ts';

type CardProps = {
  card: CardData;
  handleCardClick: HandleCardClick;
};

export default function Card(props: CardProps): React.JSX.Element {
  const { name, link } = props.card;
  const { handleCardClick } = props;
  const cardLikeButtonClassName = `card__like-button ${
    card.isLiked ? 'card__like-button_is-active' : ''
  }`;

  return (
    <li className='card'>
      <img
        className='card__image'
        src={link}
        alt={name}
        onClick={() => handleCardClick(name, link)}
      />
      <button
        aria-label='Like card'
        type='button'
        className={cardLikeButtonClassName}
        onClick={() => handleCardLike(card)}
      />
      <div className='card__description'>
        <h2 className='card__title'>{name}</h2>
        <button
          aria-label='Like card'
          type='button'
          className='card__like-button'
        />
      </div>
    </li>
  );
}
