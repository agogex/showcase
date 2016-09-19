export class Product {
    name: string;
    colors: string[];
    price: number;
    image: string;
    description: string;
    selectedColor: string;
    quantity: number;
}

export class CartItem {
    product: Product;
    selectedColor: string;
    quantity: number;
}