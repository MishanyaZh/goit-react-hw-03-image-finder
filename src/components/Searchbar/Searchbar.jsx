import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={s.searchbar}>
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(e.target.elements.imgValue.value);
        console.log(e.target.elements.imgValue.value);
      }}
      className={s.searchForm}
    >
      <button type="submit" className={s.searchFormButton}>
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        onSubmit={e => {
          e.preventDefault();
          // onSubmit(e.target.value);
          console.log(e.target.value);
        }}
        name="imgValue"
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

export default Searchbar;
