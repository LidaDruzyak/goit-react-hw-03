import s from "./SearchBox.module.css";

const SearchBox = ({ search, onSearchChange }) => {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={search}
          onChange={onSearchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
