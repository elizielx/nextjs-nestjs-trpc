"use client";

import { useEffect, useState } from "react";
import { trpc } from "../trpc";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello
      .query({ name: `from Nest.js` })
      .then(({ greeting }) => setGreeting(greeting));
  }, []);
  return (
    <>
      <p>I am client side: {greeting}</p>
      <a href="/">Go Back</a>
    </>
  );
}
