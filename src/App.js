import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>てすと</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
    </div>
  );
}
