import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateTransaction } from "./updatetransaction";


export class UpdateTransactionsWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactions", elemType: shared.UpdateTransaction })
  transactions: UpdateTransaction[];
}
