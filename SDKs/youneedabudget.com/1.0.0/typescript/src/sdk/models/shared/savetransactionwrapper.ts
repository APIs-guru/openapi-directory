import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SaveTransaction } from "./savetransaction";


export class SaveTransactionWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction: SaveTransaction;
}
