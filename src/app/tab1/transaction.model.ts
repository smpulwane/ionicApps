import { Item } from './item.model';

export interface Transaction {
    id: string;
    time: string;
    date: string;
    total: number;
    discount: number;
    vat: number;
    subtotal: number;
    items: Item[];
 }
