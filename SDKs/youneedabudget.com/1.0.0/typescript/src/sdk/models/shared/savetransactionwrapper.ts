import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveTransaction } from "./savetransaction";



export class SaveTransactionWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction: SaveTransaction;
}
