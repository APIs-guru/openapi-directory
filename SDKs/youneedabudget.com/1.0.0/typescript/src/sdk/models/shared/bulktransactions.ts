import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveTransaction } from "./savetransaction";



export class BulkTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SaveTransaction })
  transactions: SaveTransaction[];
}
