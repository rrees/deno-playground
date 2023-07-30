import { Random } from "https://deno.land/x/random@v1.1.2/Random.js";

const prg = new Random();

function d6() {
	return prg.int(1, 6 + 1);
}

interface Combatant {
	speed: number,
	brawn: number,
	magic: number,
	armour: number,
	health: number,
}

type CombatResult = string | undefined;

export function determineDamage(winner: Combatant, loser: Combatant, damageRoll: number): number {
	return winner.brawn - loser.armour + damageRoll;
}

export function determineRoundWinner(hero: Combatant, heroRoll: number,
	opponent: Combatant, opponentRoll: number): CombatResult {
	const heroAttack = heroRoll + hero.speed;
	const enemyAttack = opponentRoll + opponent.speed;

	if (enemyAttack === heroAttack) {
		return undefined;
	}

	return heroAttack > enemyAttack ? "hero" : "enemy";
}


export function fightRound(data: any, diceRoller = d6) {
	const heroAttack = diceRoller() + data.hero.speed;
	const enemyAttack = diceRoller() + data.enemy.speed;

	const victor = determineRoundWinner(data.hero, diceRoller(), data.enemy, diceRoller());

	if (victor === undefined) {
		console.log("Round is a tie, no damage done");
		return;
	}
	const [winner, loser] = victor === "hero" ? [data.hero, data.enemy] : [data.enemy, data.hero];

	const baseDamage = diceRoller();

	const damage = determineDamage(winner, loser, baseDamage)

	console.log(victor);

	console.log(`Winner: ${victor}, damage roll: ${baseDamage}, total damage: ${damage}`);
}

if(import.meta.main) {
	if(Deno.args.length !== 1) {
		console.log("Usage: deno run <Initial data JSON string>");
		Deno.exit(1);
	}

	const initialData = JSON.parse(Deno.args[0]);

	console.log(initialData);

	fightRound(initialData, d6);
}