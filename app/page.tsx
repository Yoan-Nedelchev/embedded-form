"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [sheetdata, setSheetdata] = useState("");

  useEffect(() => {
    console.log("hereheretest");

    async function fetchData() {
      const req = await fetch("/api/sheet");
      const res = await req.json();
      setSheetdata(res.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </div>

      <main>
        <h1>{JSON.stringify(sheetdata)}</h1>
      </main>
    </div>
  );
}
