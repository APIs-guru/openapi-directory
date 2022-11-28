import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HybridTransactionClearedEnum {
    Cleared = "cleared",
    Uncleared = "uncleared",
    Reconciled = "reconciled"
}
export declare enum HybridTransactionFlagColorEnum {
    Red = "red",
    Orange = "orange",
    Yellow = "yellow",
    Green = "green",
    Blue = "blue",
    Purple = "purple"
}
export declare enum HybridTransactionTypeEnum {
    Transaction = "transaction",
    Subtransaction = "subtransaction"
}
export declare class HybridTransaction extends SpeakeasyBase {
    accountId: string;
    accountName: string;
    amount: number;
    approved: boolean;
    categoryId?: string;
    categoryName?: string;
    cleared: HybridTransactionClearedEnum;
    date: Date;
    deleted: boolean;
    flagColor?: HybridTransactionFlagColorEnum;
    id: string;
    importId?: string;
    matchedTransactionId?: string;
    memo?: string;
    parentTransactionId?: string;
    payeeId?: string;
    payeeName?: string;
    transferAccountId?: string;
    transferTransactionId?: string;
    type: HybridTransactionTypeEnum;
}
