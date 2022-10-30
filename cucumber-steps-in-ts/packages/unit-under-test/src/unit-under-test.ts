export class UnitUnderTest {
    constructor() {}

    public doSomething(): string {
        return "Did something";
    }

    public doSomethingWithThisNumber(num: number): string {
        return `Did something with ${num}`;
    }
}