import s from '../Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        console.log('klick');
      }}
      className={s.button}
      type="submit"
    >
      Load more
    </button>
  );
};

export default Button;
