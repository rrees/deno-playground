import * as asserts from "https://deno.land/std@0.192.0/testing/asserts.ts";

import {determineDamage, determineRoundWinner} from './dq_fight.ts';

const defaultHero = {
	brawn: 1,
	armour: 1,
	speed: 1,
	health: 30,
	magic: 0,
};

const defaultMonster = {
	speed: 2,
	brawn: 2,
	armour: 2,
	health: 15,
	magic: 0,
};

Deno.test('Check calculate with brawn and armour', () => {
	const result = determineDamage(defaultHero, defaultMonster, 3);
	asserts.assertEquals(result, 2);
});

Deno.test('Check tied values in a combat have no winner', () => {
	const result = determineRoundWinner(defaultHero, 3, defaultMonster, 2);
	asserts.assertEquals(result, undefined);
});