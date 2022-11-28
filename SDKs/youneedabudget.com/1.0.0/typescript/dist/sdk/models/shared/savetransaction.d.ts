import { SpeakeasyBase } from "../../../internal/utils";
import { SaveSubTransaction } from "./savesubtransaction";
export declare enum SaveTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
export declare enum SaveTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare class SaveTransaction extends SpeakeasyBase {
    accountId: string;
    amount: number;
    approved?: boolean;
    categoryId?: string;
    cleared?: SaveTransactionClearedEnum;
    date: Date;
    flagColor?: SaveTransactionFlagColorEnum;
    importId?: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    subtransactions?: SaveSubTransaction[];
}
