import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

import { IdString } from './IdString.ts';

Deno.test('Encoding and decoding are symmetrical', () => {
    const exampleId = 10;

    assertEquals(
        exampleId,
        IdString.decode(IdString.encode(exampleId))
    );
}); 