export const WebDetails = {
    websiteName: "Games Heaven",
    whatsappContact: "03152607405",
    instagramContact: "null",
    devLink: "https://waynedev.vercel.app",
    admins: [
        "alimalikwayne@gmail.com",
        "bhninjayt@gmail.com"
    ]
}

export interface EntrySchema {
    name: string;
    image: string;
    platform: string;
    price: number;
    originalPrice: number;
    quantity: number;
}