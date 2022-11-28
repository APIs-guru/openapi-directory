import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HybridTransaction } from "./hybridtransaction";



export class HybridTransactionsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: HybridTransaction })
  transactions: HybridTransaction[];
}


export class HybridTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: HybridTransactionsResponseData;
}
