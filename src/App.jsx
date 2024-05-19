import Snapshot from "./components/Snapshot";
import "./App.css";
import Context from "./context/context.jsx";

export default function App() {
  return (
    <Context>
      <Snapshot />
    </Context>
  );
}
