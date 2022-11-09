import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryChange } from "./inventorychange";
import { InventoryCount } from "./inventorycount";
import { Error } from "./error";


export class BatchChangeInventoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: shared.InventoryChange })
  changes?: InventoryChange[];

  @Metadata({ data: "json, name=counts", elemType: shared.InventoryCount })
  counts?: InventoryCount[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
