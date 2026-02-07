export interface Package {
    id: number;
    type: string;
    model: string;
    name: string;
    desc: string;
    price_daily: number;
    controllers: number;
    games: string[];
    games_count: number;
    image: string;
}
