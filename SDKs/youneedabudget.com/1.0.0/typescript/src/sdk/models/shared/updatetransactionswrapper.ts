import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateTransaction } from "./updatetransaction";



export class UpdateTransactionsWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: UpdateTransaction })
  transactions: UpdateTransaction[];
}
