import { Hero } from "../../types/heroTypes";

interface HeroSelectorProps {
	onHeroSelect: (hero: Hero) => void;
}

const HeroSelector = ({ onHeroSelect }: HeroSelectorProps) => {
	return (
		<div>
			<button onClick={() => onHeroSelect({ name: "one", class: "Warrior" })}>
				Warrior
			</button>
			<button onClick={() => onHeroSelect({ name: "two", class: "Mage" })}>
				Mage
			</button>
		</div>
	);
};

export default HeroSelector;
