import { useState } from "react";
import "./App.css";
import type { Hero } from "./types/heroTypes";
import HeroCard from "./components/HeroCard/HeroCard";

function App() {
	const [hero1, setHero1] = useState<Hero | null>();
	const [hero2, setHero2] = useState<Hero | null>();

	return (
		<>
			<div>
				<HeroCard hero={hero1} />
				<button onClick={() => setHero1({ name: "one", class: "Warrior" })}>
					Warrior
				</button>
				<button
					onClick={() => {
						setHero1({ name: "two", class: "Mage" });
					}}
				>
					Mage
				</button>
			</div>
			<div>
				<HeroCard hero={hero2} />
				<button onClick={() => setHero2({ name: "one", class: "Warrior" })}>
					Warrior
				</button>
				<button
					onClick={() => {
						setHero2({ name: "two", class: "Mage" });
					}}
				>
					Mage
				</button>
			</div>
		</>
	);
}

export default App;
