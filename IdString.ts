export class IdString {
    static readonly #encodingLetters = "abcdefghijkmnpqrstuvwxyz"
        + "123456789"
        + "ABCDEFG";
    
    static encode(n: number): string {
        const encodingModulus = this.#encodingLetters.length;
        const firstCharacter = this.#encodingLetters.charAt(0);

        let outputLetters : string[] = [];
        let current = n;

        while(current > 0) {
            const currentChar = current % encodingModulus;
            const divisor = Math.floor(current / encodingModulus);

            current = divisor;

            outputLetters.push(this.#encodingLetters.charAt(currentChar));
        }

        return outputLetters.join('');
    
    }

    static decode(s: string): number {
        const letters = s.split('');

        let id = 0;
        let exponent = 0;
        const numberOfEncodingLetters = this.#encodingLetters.length;

        for(const letter of letters) {

            const value = this.#encodingLetters.indexOf(letter);
            id += value * Math.pow(numberOfEncodingLetters, exponent);
            exponent++;
        }

        return id;
    }
}