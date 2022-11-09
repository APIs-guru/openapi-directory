import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScheduledTransactionDetail } from "./scheduledtransactiondetail";


export class ScheduledTransactionsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduled_transactions", elemType: shared.ScheduledTransactionDetail })
  scheduledTransactions: ScheduledTransactionDetail[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class ScheduledTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: ScheduledTransactionsResponseData;
}
