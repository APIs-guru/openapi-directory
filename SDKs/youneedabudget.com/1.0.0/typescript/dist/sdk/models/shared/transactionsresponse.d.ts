import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";
export declare class TransactionsResponseData extends SpeakeasyBase {
    serverKnowledge: number;
    transactions: TransactionDetail[];
}
export declare class TransactionsResponse extends SpeakeasyBase {
    data: TransactionsResponseData;
}
