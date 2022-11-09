import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CatalogPricingRule
/** 
 * Defines how discounts are automatically applied to a set of items that match the pricing rule
 * during the active time period.
**/
export class CatalogPricingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=apply_products_id" })
  applyProductsId?: string;

  @Metadata({ data: "json, name=customer_group_ids_any" })
  customerGroupIdsAny?: string[];

  @Metadata({ data: "json, name=discount_id" })
  discountId?: string;

  @Metadata({ data: "json, name=exclude_products_id" })
  excludeProductsId?: string;

  @Metadata({ data: "json, name=exclude_strategy" })
  excludeStrategy?: string;

  @Metadata({ data: "json, name=match_products_id" })
  matchProductsId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=time_period_ids" })
  timePeriodIds?: string[];

  @Metadata({ data: "json, name=valid_from_date" })
  validFromDate?: string;

  @Metadata({ data: "json, name=valid_from_local_time" })
  validFromLocalTime?: string;

  @Metadata({ data: "json, name=valid_until_date" })
  validUntilDate?: string;

  @Metadata({ data: "json, name=valid_until_local_time" })
  validUntilLocalTime?: string;
}
