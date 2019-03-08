export class Product {
  constructor(
    public readonly sku: string,
    public readonly name: string,
    public readonly imageUrl: string,
    public readonly department: string[],
    public readonly price: number, ) {
  }
  toString(): string {
    return this.sku + ", " + this.name;
  }
}
