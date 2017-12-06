import { Check } from "./check.model";

export interface Card{
    id: number,
    text: string,
    status: number,
    checkList?: Check[]
}