import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderLineItemPricingBlocklistsBlockedDiscount
/** 
 * A discount to block from applying to a line item. The discount must be 
 * identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
**/
export class OrderLineItemPricingBlocklistsBlockedDiscount extends SpeakeasyBase {
  @Metadata({ data: "json, name=discount_catalog_object_id" })
  discountCatalogObjectId?: string;

  @Metadata({ data: "json, name=discount_uid" })
  discountUid?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
