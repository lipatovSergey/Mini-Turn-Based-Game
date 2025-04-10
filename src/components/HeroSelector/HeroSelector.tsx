import { Hero } from "../../types/heroTypes";

interface HeroSelectorProps {
	onHeroSelect: (hero: Hero) => void;
}

const HeroSelector = ({ onHeroSelect }: HeroSelectorProps) => {
	const heroes: Hero[] = [
		{
			name: "John",
			class: "Warrior",
			health: 100,
			attack: 15,
			status: "Alive",
		},
		{ name: "Mirage", class: "Mage", health: 80, attack: 20, status: "Alive" },
		{ name: "Tom", class: "Paladin", health: 110, attack: 10, status: "Alive" },
	];
	return (
		<div>
			{heroes.map(hero => (
				<button key={hero.class} onClick={() => onHeroSelect(hero)}>
					{hero.class}
				</button>
			))}
		</div>
	);
};

export default HeroSelector;
