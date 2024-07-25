import React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";

function App(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">
      ToDo List <br />
        <span>Create task</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
