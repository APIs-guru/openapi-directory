import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InventoryCount
/** 
 * Represents Square-estimated quantity of items in a particular state at a
 * particular seller location based on the known history of physical counts and
 * inventory adjustments.
**/
export class InventoryCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=calculated_at" })
  calculatedAt?: string;

  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_object_type" })
  catalogObjectType?: string;

  @Metadata({ data: "json, name=is_estimated" })
  isEstimated?: boolean;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
