import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CatalogItemOptionValueForItemVariation } from "./catalogitemoptionvalueforitemvariation";
import { ItemVariationLocationOverrides } from "./itemvariationlocationoverrides";
import { Money } from "./money";
import { CatalogStockConversion } from "./catalogstockconversion";


// CatalogItemVariation
/** 
 * An item variation (i.e., product) in the Catalog object model. Each item
 * may have a maximum of 250 item variations.
**/
export class CatalogItemVariation extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_for_booking" })
  availableForBooking?: boolean;

  @Metadata({ data: "json, name=inventory_alert_threshold" })
  inventoryAlertThreshold?: number;

  @Metadata({ data: "json, name=inventory_alert_type" })
  inventoryAlertType?: string;

  @Metadata({ data: "json, name=item_id" })
  itemId?: string;

  @Metadata({ data: "json, name=item_option_values", elemType: shared.CatalogItemOptionValueForItemVariation })
  itemOptionValues?: CatalogItemOptionValueForItemVariation[];

  @Metadata({ data: "json, name=location_overrides", elemType: shared.ItemVariationLocationOverrides })
  locationOverrides?: ItemVariationLocationOverrides[];

  @Metadata({ data: "json, name=measurement_unit_id" })
  measurementUnitId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=price_money" })
  priceMoney?: Money;

  @Metadata({ data: "json, name=pricing_type" })
  pricingType?: string;

  @Metadata({ data: "json, name=service_duration" })
  serviceDuration?: number;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=stockable" })
  stockable?: boolean;

  @Metadata({ data: "json, name=stockable_conversion" })
  stockableConversion?: CatalogStockConversion;

  @Metadata({ data: "json, name=team_member_ids" })
  teamMemberIds?: string[];

  @Metadata({ data: "json, name=track_inventory" })
  trackInventory?: boolean;

  @Metadata({ data: "json, name=upc" })
  upc?: string;

  @Metadata({ data: "json, name=user_data" })
  userData?: string;
}
