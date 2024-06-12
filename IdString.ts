
export class IdString {
    static encode(n: number): string {
        return n.toString();
    }

    static decode(s: string): number {
        return Number.parseInt(s);
    }
}