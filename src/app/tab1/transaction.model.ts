import { Item } from './item.model';

export interface Transaction {
    id: string;
    time: string;
    date: string;
    total: number;
    discount: number;
    discountType: string;
    vat: number;
    subtotal: number;
    items: Item[];
    change: number;
 }
