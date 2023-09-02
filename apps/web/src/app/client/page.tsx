import ClientSide from "./ClientSide";
import styles from "../page.module.css";

export default async function Client() {
  return (
    <main className={styles.main}>
      <ClientSide />
    </main>
  );
}
