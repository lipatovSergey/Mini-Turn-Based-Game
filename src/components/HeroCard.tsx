import React from "react";
import { Hero } from "../types/heroTypes";

interface HeroCardProps {
	hero: Hero | null | undefined;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
	if (!hero) {
		return <div>No Hero</div>;
	}
	return (
		<div>
			<p>Name: {hero.name}</p>
			<p>Class: {hero.class}</p>
		</div>
	);
};

export default HeroCard;
