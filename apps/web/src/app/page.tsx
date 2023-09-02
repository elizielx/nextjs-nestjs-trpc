import Image from "next/image";
import styles from "./page.module.css";
import { trpc } from "./trpc";

export default async function Home() {
  const greet = await trpc.hello.query({ name: `from Nest.js` });

  return (
    <main className={styles.main}>
      <div>
        <h1>Hello, world</h1>
        <p>{greet.greeting}</p>
        <br />
        <a href="/client">ClientSide</a>
      </div>
    </main>
  );
}
