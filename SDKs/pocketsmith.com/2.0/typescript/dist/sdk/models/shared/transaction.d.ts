import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { TransactionAccount } from "./transactionaccount";
export declare enum TransactionStatusEnum {
    Pending = "pending",
    Posted = "posted"
}
export declare enum TransactionTypeEnum {
    Debit = "debit",
    Credit = "credit"
}
export declare class Transaction extends SpeakeasyBase {
    amount?: number;
    category?: Category;
    chequeNumber?: string;
    closingBalance?: number;
    date?: string;
    id?: number;
    isTransfer?: boolean;
    labels?: string[];
    memo?: string;
    note?: string;
    originalPayee?: string;
    payee?: string;
    status?: TransactionStatusEnum;
    transactionAccount?: TransactionAccount;
    type?: TransactionTypeEnum;
    uploadSource?: string;
}
