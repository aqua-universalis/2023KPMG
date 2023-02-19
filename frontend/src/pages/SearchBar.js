import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.div}>원하는 키워드를 검색해볼까요?</div>
      <img className={styles.searchIcon} alt="" src="../search-icon.svg" />
    </div>
  );
};

export default SearchBar;
