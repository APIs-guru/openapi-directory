import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InventoryAdjustment } from "./inventoryadjustment";
import { Error } from "./error";


export class RetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: InventoryAdjustment;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
