import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";



export class TransactionResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction: TransactionDetail;
}


export class TransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionResponseData;
}
