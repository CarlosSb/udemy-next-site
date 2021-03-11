import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
    </header>
  );
}
