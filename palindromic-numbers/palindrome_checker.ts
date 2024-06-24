export function isPalindrome(x: number) {
    if(x < 0) {
        return false;
    }

    if(x < 10) {
        return true;
    }

    const length = Math.floor(Math.log10(x));
    return checkPalindrome(x, length);
}

function checkPalindrome(n: number, length: number) {
    if(length < 1) {
        return true;
    }

    const remainder = n % 10;
    const topDigit = Math.floor(n / Math.pow(10, length));

    if(topDigit !== remainder) {
        return false;
    }

    let nextIteration = (n - remainder) % Math.pow(10, length) / 10;

    console.log(length, remainder, topDigit, nextIteration);

    if(nextIteration === 0) {
        return true;
    }

    return checkPalindrome(nextIteration, length - 2);
}
