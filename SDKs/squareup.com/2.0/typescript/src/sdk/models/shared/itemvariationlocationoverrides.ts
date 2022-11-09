import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ItemVariationLocationOverrides
/** 
 * Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`.
**/
export class ItemVariationLocationOverrides extends SpeakeasyBase {
  @Metadata({ data: "json, name=inventory_alert_threshold" })
  inventoryAlertThreshold?: number;

  @Metadata({ data: "json, name=inventory_alert_type" })
  inventoryAlertType?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=price_money" })
  priceMoney?: Money;

  @Metadata({ data: "json, name=pricing_type" })
  pricingType?: string;

  @Metadata({ data: "json, name=track_inventory" })
  trackInventory?: boolean;
}
