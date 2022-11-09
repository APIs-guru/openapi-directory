import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryPhysicalCount } from "./inventoryphysicalcount";
import { Error } from "./error";


export class RetrieveInventoryPhysicalCountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: InventoryPhysicalCount;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
