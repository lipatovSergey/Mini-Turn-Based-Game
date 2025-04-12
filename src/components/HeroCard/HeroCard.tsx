import React from "react";
import { Hero } from "../../types/heroTypes";
import styles from "./HeroCard.module.css";

interface HeroCardProps {
	hero: Hero | undefined;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
	if (!hero) {
		return <div>No Hero</div>;
	}
	return (
		<div className={styles.heroCard}>
			<p>Name: {hero.name}</p>
			<p>Class: {hero.class}</p>
			<p>Health: {hero.class}</p>
			<p>Attack: {hero.attack}</p>
			<p>Status: {hero.status}</p>
		</div>
	);
};

export default HeroCard;
