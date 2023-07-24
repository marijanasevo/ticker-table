import css from "./loading-animation.module.css";

const LoadingAnimation = () => {
  return (
    <div className={css["loading"]}>
      <h2>Loading data</h2>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default LoadingAnimation;
