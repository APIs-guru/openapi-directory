import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";
export declare class SaveTransactionsResponseData extends SpeakeasyBase {
    duplicateImportIds?: string[];
    serverKnowledge: number;
    transaction?: TransactionDetail;
    transactionIds: string[];
    transactions?: TransactionDetail[];
}
export declare class SaveTransactionsResponse extends SpeakeasyBase {
    data: SaveTransactionsResponseData;
}
