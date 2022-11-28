import { SpeakeasyBase } from "../../../internal/utils";
import { SaveSubTransaction } from "./savesubtransaction";
export declare enum UpdateTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
export declare enum UpdateTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare class UpdateTransaction extends SpeakeasyBase {
    accountId: string;
    amount: number;
    approved?: boolean;
    categoryId?: string;
    cleared?: UpdateTransactionClearedEnum;
    date: Date;
    flagColor?: UpdateTransactionFlagColorEnum;
    id: string;
    importId?: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    subtransactions?: SaveSubTransaction[];
}
