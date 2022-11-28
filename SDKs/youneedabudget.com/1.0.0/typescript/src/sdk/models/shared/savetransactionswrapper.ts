import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveTransaction } from "./savetransaction";



export class SaveTransactionsWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: SaveTransaction;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: SaveTransaction })
  transactions?: SaveTransaction[];
}
