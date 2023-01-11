import { Tiles } from "../components/Tiles";
import { Keyboard } from "../components/Keyboard";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <Tiles />
      <Keyboard />
    </div>
  );
}
