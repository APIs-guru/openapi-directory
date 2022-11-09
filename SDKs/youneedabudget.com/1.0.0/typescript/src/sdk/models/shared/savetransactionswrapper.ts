import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SaveTransaction } from "./savetransaction";
import { SaveTransaction } from "./savetransaction";


export class SaveTransactionsWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction?: SaveTransaction;

  @Metadata({ data: "json, name=transactions", elemType: shared.SaveTransaction })
  transactions?: SaveTransaction[];
}
