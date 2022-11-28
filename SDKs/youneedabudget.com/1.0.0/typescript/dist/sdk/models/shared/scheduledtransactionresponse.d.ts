import { SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";
export declare class ScheduledTransactionResponseData extends SpeakeasyBase {
    scheduledTransaction: ScheduledTransactionDetail;
}
export declare class ScheduledTransactionResponse extends SpeakeasyBase {
    data: ScheduledTransactionResponseData;
}
