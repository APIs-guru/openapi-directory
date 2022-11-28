import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubTransaction extends SpeakeasyBase {
    amount: number;
    categoryId?: string;
    categoryName?: string;
    deleted: boolean;
    id: string;
    memo?: string;
    payeeId?: string;
    payeeName?: string;
    transactionId: string;
    transferAccountId?: string;
    transferTransactionId?: string;
}
