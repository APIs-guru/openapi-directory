import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryAdjustment } from "./inventoryadjustment";
import { CatalogMeasurementUnit } from "./catalogmeasurementunit";
import { InventoryPhysicalCount } from "./inventoryphysicalcount";
import { InventoryTransfer } from "./inventorytransfer";


// InventoryChange
/** 
 * Represents a single physical count, inventory, adjustment, or transfer
 * that is part of the history of inventory changes for a particular
 * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) instance.
**/
export class InventoryChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: InventoryAdjustment;

  @Metadata({ data: "json, name=measurement_unit" })
  measurementUnit?: CatalogMeasurementUnit;

  @Metadata({ data: "json, name=measurement_unit_id" })
  measurementUnitId?: string;

  @Metadata({ data: "json, name=physical_count" })
  physicalCount?: InventoryPhysicalCount;

  @Metadata({ data: "json, name=transfer" })
  transfer?: InventoryTransfer;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
