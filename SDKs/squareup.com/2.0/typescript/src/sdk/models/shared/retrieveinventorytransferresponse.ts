import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { InventoryTransfer } from "./inventorytransfer";


export class RetrieveInventoryTransferResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=transfer" })
  transfer?: InventoryTransfer;
}
