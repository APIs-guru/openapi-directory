import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceApplication } from "./sourceapplication";


// InventoryPhysicalCount
/** 
 * Represents the quantity of an item variation that is physically present
 * at a specific location, verified by a seller or a seller's employee. For example,
 * a physical count might come from an employee counting the item variations on
 * hand or from syncing with an external system.
**/
export class InventoryPhysicalCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_object_type" })
  catalogObjectType?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=occurred_at" })
  occurredAt?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=source" })
  source?: SourceApplication;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
