"use client";

import styles from "./page.module.css";
import { trpc } from "./trpc";

export default function Home() {
  const greet = trpc.hello.useQuery({ name: `from Nest.js` });

  return (
    <main className={styles.main}>
      <div>
        <h1>Hello, world</h1>
        <p>{greet.isLoading ? "Loading..." : greet.data?.greeting}</p>
      </div>
    </main>
  );
}
