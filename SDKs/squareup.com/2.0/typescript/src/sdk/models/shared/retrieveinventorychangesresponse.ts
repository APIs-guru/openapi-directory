import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryChange } from "./inventorychange";
import { Error } from "./error";


export class RetrieveInventoryChangesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.InventoryChange })
  changes?: InventoryChange[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
