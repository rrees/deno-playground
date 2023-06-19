import * as mod from "https://deno.land/std@0.192.0/testing/asserts.ts";

import {determineDamage} from './dq_fight.ts';

const defaultHero = {
	brawn: 1,
	armour: 1,
};

const defaultMonster = {
	brawn: 2,
	armour: 2,
};

Deno.test('Check calculate with brawn and armour', () => {
	const result = determineDamage(defaultHero, defaultMonster, 3);
	mod.assertEquals(result, 2);
});