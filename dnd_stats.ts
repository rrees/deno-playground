import { Random } from "https://deno.land/x/random@v1.1.2/Random.js";

const prg = new Random();

const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

function generateStat(statName: string) {
	const rolls: number[] = [];

	while (rolls.length < 4) {
		rolls.push(prg.int(1, 6 + 1))
	}

	rolls.sort();

	return {
		name: statName,
		total: rolls.slice(1).reduce((acc, val) => acc + val, 0),
		rolls
	};	
}


const allStats = stats.map((stat) => generateStat(stat));

//console.log(allStats);

allStats.forEach((stat) => console.log(`${stat.name}: ${stat.total}`));