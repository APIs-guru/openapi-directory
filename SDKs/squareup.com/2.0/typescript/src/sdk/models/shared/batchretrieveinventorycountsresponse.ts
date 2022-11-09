import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryCount } from "./inventorycount";
import { Error } from "./error";


export class BatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=counts", elemType: shared.InventoryCount })
  counts?: InventoryCount[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
