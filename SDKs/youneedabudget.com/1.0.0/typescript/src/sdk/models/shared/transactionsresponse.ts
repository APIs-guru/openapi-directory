import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransactionDetail } from "./transactiondetail";


export class TransactionsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;

  @Metadata({ data: "json, name=transactions", elemType: shared.TransactionDetail })
  transactions: TransactionDetail[];
}


export class TransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionsResponseData;
}
