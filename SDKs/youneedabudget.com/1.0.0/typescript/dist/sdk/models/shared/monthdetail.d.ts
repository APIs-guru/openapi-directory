import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
export declare class MonthDetail extends SpeakeasyBase {
    activity: number;
    ageOfMoney?: number;
    budgeted: number;
    categories: Category[];
    deleted: boolean;
    income: number;
    month: Date;
    note?: string;
    toBeBudgeted: number;
}
