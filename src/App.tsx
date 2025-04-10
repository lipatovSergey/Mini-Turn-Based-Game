import { useState } from "react";
import "./App.css";
import type { Hero } from "./types/heroTypes";
import HeroCard from "./components/HeroCard/HeroCard";
import HeroSelector from "./components/HeroSelector/HeroSelector";

function App() {
	const [hero1, setHero1] = useState<Hero | null>();
	const [hero2, setHero2] = useState<Hero | null>();

	return (
		<>
			<div>
				<HeroCard hero={hero1} />
				<HeroSelector onHeroSelect={setHero1} />
			</div>
			<div>
				<HeroCard hero={hero2} />
				<HeroSelector onHeroSelect={setHero2} />
			</div>
		</>
	);
}

export default App;
