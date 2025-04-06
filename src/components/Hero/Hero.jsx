import { useNavigate } from "react-router-dom";
import css from "./Hero.module.css";
export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.heroSection}>
      <div className={css.heroCont}>
        <h1 className={css.header}>Find your perfect rental car</h1>
        <p className={css.paragraf}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.button} onClick={handleClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
}
