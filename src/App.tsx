import { useState } from "react";
import "./App.css";
import type { Hero } from "./types/heroTypes";
import HeroCard from "./components/HeroCard";

function App() {
	const [hero1, setHero1] = useState<Hero | null>();
	const [hero2, setHero2] = useState<Hero | null>();

	useState(() => {
		setHero1({ name: "one", class: "Warrior" });
		setHero2({ name: "two", class: "Mage" });
	});

	return (
		<>
			<div>
				<HeroCard hero={hero1} />
				<HeroCard hero={hero2} />
			</div>
		</>
	);
}

export default App;
