import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 4;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
        <p className={headerStyles.description}>
          Keep up to date with the latest web dev news
        </p>
      </h1>
    </div>
  );
};

export default Header;
