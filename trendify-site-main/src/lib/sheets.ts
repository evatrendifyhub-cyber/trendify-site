import Papa from "papaparse";
import { Product } from "./types";

export async function getProducts(): Promise<Product[]> {
    const sheetId = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const res = await fetch(
        `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const csv = await res.text();

    const parsed = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    });

    const products = parsed.data.map((row: any, index: number) => {
        const price = parseFloat(row["Price"]?.replace(/[^0-9.]/g, "") || "0") || 0;
        return {
            id: index.toString(),
            name: row["Product Name"] || row["Name"],
            image: row["Image URL"],
            price: price,
            link: row["Product Link "] || row["Link"],
            description: row["Description"],
            category: row["Category"],
        };
    });

    return products.filter(p => p.price <= 10000);
}

export async function getProductById(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((p) => p.id === id);
}
