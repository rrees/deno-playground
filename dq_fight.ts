import { Random } from "https://deno.land/x/random@v1.1.2/Random.js";

const prg = new Random();

function d6() {
	return prg.int(1, 6 + 1);
}

interface Combatant {
	brawn: number,
	armour: number,
}

export function determineDamage(winner: Combatant, loser: Combatant, damageRoll: number): number {
	return winner.brawn - loser.armour + damageRoll;
}


function fightRound(data: any, diceRoller = d6) {
	const heroAttack = diceRoller() + data.hero.brawn;
	const enemyAttack = diceRoller() + data.enemy.brawn;

	const victor = heroAttack > enemyAttack ? "hero" : "enemy";
	const loser = victor === "hero" ? "hero" : "enemy";

	const baseDamage = diceRoller();

	console.log(data[victor]);

	console.log(`Winner: ${victor}, damage: ${baseDamage}`);
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