import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";



export class ScheduledTransactionsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduled_transactions", elemType: ScheduledTransactionDetail })
  scheduledTransactions: ScheduledTransactionDetail[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class ScheduledTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ScheduledTransactionsResponseData;
}
