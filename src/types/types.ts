export type BottleOfSmoothie = {
    id: string;
    title: string;
    volume: number;
    price: number;

    imageUrl: string;
    imageAlt: string;

    bgColor: string;
}

export type Product = {
    product: BottleOfSmoothie,
    amount: number,
};