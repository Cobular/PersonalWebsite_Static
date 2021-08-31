import { Route, Switch } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Resume } from "./Resume";

export function Main() {
  return (
    <main>
      <Home />
    </main>
  );
}
