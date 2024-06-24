import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

import { isPalindrome } from "./palindrome_checker.ts";

Deno.test('check palindromic numbers', () => {
    for(const n of [0, 1, 3, 9, 11, 121, 1001,
        101101, 11211, 13231,
        1000110001,
    ]) {
        assertEquals(isPalindrome(n), true,
        `${n} was not detected as a palindrome`);
    }
});


Deno.test('check non-palindromic numbers', () => {
    for(const n of [-121, 10,
        1000021,
        1000021,
        10022201,
    ]) {
        assertEquals(isPalindrome(n), false,
        `${n} was declared a palindrome`);
    }
});