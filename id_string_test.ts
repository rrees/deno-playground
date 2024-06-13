import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

import { IdString } from './IdString.ts';

Deno.test('Encoding and decoding are symmetrical', () => {
    for (const exampleId of [10, 20, 40, 50, 75, 500, 1000, 10000]) {

        assertEquals(
            exampleId,
            IdString.decode(IdString.encode(exampleId))
        );
    }
});

type TestEncodings = [number, string]

Deno.test('encoding', () => {
    for (const [id, targetString] of <TestEncodings[]>[
        [2, 'c'],
        [39, 'G'],
        [40, 'ab'],
        [44, 'eb'],
        [45, 'fb']]) {
        assertEquals(IdString.encode(id), targetString);
    }
});

Deno.test('decoding', () => {
    for (const [targetId, idString] of <TestEncodings[]>[
        [2, 'c'],
    ]) {
        assertEquals(IdString.decode(idString), targetId);
    }
});