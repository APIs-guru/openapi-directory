import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";



export class TransactionsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: TransactionDetail })
  transactions: TransactionDetail[];
}


export class TransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionsResponseData;
}
