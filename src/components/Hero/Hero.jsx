import css from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={css.heroSection}>
      <div className={css.heroCont}>
        <h1 className={css.header}>Find your perfect rental car</h1>
        <p className={css.paragraf}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.button}>View Catalog</button>
      </div>
    </div>
  );
}
