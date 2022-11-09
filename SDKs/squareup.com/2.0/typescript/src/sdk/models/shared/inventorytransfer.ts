import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceApplication } from "./sourceapplication";


// InventoryTransfer
/** 
 * Represents the transfer of a quantity of product inventory at a
 * particular time from one location to another.
**/
export class InventoryTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=catalog_object_id" })
  catalogObjectId?: string;

  @Metadata({ data: "json, name=catalog_object_type" })
  catalogObjectType?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=from_location_id" })
  fromLocationId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

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

  @Metadata({ data: "json, name=to_location_id" })
  toLocationId?: string;
}
