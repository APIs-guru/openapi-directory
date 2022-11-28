import { SpeakeasyBase } from "../../../internal/utils";
import { HybridTransaction } from "./hybridtransaction";
export declare class HybridTransactionsResponseData extends SpeakeasyBase {
    transactions: HybridTransaction[];
}
export declare class HybridTransactionsResponse extends SpeakeasyBase {
    data: HybridTransactionsResponseData;
}
