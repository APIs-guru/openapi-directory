import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";
export declare class ScheduledTransactionsResponseData extends SpeakeasyBase {
    scheduledTransactions: ScheduledTransactionDetail[];
    serverKnowledge: number;
}
export declare class ScheduledTransactionsResponse extends SpeakeasyBase {
    data: ScheduledTransactionsResponseData;
}
