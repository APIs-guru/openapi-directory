import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SaveTransaction } from "./savetransaction";


export class BulkTransactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactions", elemType: shared.SaveTransaction })
  transactions: SaveTransaction[];
}
