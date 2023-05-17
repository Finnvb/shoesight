import classes from "../../styles/components/Header.module.css";

const Searchbar = (props) => {
  return (
    <>
      <form>
        <input
          className={classes.searchbar}
          type="search"
          placeholder="Artikelen zoeken.."
        ></input>
      </form>
    </>
  );
};

export default Searchbar;