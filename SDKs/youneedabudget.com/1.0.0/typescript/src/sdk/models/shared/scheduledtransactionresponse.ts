import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";


export class ScheduledTransactionResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduled_transaction" })
  scheduledTransaction: ScheduledTransactionDetail;
}


export class ScheduledTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: ScheduledTransactionResponseData;
}
