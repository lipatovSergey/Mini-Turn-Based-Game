import { useState } from "react";
import type { Hero } from "../../types/heroTypes";
import HeroCard from "../HeroCard/HeroCard";
import HeroSelector from "../HeroSelector/HeroSelector";
import styles from "./BattleGround.module.css";

const BattleGround = () => {
	const [hero1, setHero1] = useState<Hero | undefined>();
	const [hero2, setHero2] = useState<Hero | undefined>();

	console.log(hero1);

	return (
		<>
			<div className={styles.battleGround}>
				<div className={styles.heroCard}>
					<HeroCard hero={hero1} />
					<HeroSelector onHeroSelect={setHero1} />
				</div>
				<div className={styles.heroCard}>
					<HeroCard hero={hero2} />
					<HeroSelector onHeroSelect={setHero2} />
				</div>
			</div>

			<button disabled={hero1 === undefined || hero2 === undefined}>
				start
			</button>
		</>
	);
};

export default BattleGround;
