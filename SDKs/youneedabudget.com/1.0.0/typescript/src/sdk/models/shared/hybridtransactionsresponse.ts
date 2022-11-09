import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HybridTransaction } from "./hybridtransaction";


export class HybridTransactionsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactions", elemType: shared.HybridTransaction })
  transactions: HybridTransaction[];
}


export class HybridTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: HybridTransactionsResponseData;
}
