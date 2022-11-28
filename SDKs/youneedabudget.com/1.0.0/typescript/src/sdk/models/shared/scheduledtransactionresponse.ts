import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";



export class ScheduledTransactionResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduled_transaction" })
  scheduledTransaction: ScheduledTransactionDetail;
}


export class ScheduledTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ScheduledTransactionResponseData;
}
