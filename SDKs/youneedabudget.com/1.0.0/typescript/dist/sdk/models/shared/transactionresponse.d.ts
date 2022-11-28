import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";
export declare class TransactionResponseData extends SpeakeasyBase {
    transaction: TransactionDetail;
}
export declare class TransactionResponse extends SpeakeasyBase {
    data: TransactionResponseData;
}
