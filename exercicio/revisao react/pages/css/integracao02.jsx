import styles from "./integracao02.module.css";

export default function integracao2() {
  return (
    <div id={styles.integracao2}>
      <div className={styles.vermelha}>Texto 01</div>
      <div className={styles.azul}>Texto 02</div>
      <div className={styles.branco}>Texto 03</div>
    </div>
  );
}
