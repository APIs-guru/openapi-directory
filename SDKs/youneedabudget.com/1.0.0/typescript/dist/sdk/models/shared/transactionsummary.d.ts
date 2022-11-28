import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TransactionSummaryClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
export declare enum TransactionSummaryFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare class TransactionSummary extends SpeakeasyBase {
    accountId: string;
    amount: number;
    approved: boolean;
    categoryId?: string;
    cleared: TransactionSummaryClearedEnum;
    date: Date;
    deleted: boolean;
    flagColor?: TransactionSummaryFlagColorEnum;
    id: string;
    importId?: string;
    matchedTransactionId?: string;
    memo?: string;
    payeeId?: string;
    transferAccountId?: string;
    transferTransactionId?: string;
}
