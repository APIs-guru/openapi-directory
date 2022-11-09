import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionDetail } from "./transactiondetail";


export class TransactionResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction: TransactionDetail;
}


export class TransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionResponseData;
}
