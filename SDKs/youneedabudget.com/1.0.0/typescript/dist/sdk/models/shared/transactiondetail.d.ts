import { SpeakeasyBase } from "../../../internal/utils";
import { SubTransaction } from "./subtransaction";
export declare enum TransactionDetailClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
export declare enum TransactionDetailFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare class TransactionDetail extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    amount: number;
    approved: boolean;
    categoryId?: string;
    categoryName?: string;
    cleared: TransactionDetailClearedEnum;
    date: Date;
    deleted: boolean;
    flagColor?: TransactionDetailFlagColorEnum;
    id: string;
    importId?: string;
    matchedTransactionId?: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    subtransactions: SubTransaction[];
    transferAccountId?: string;
    transferTransactionId?: string;
}
