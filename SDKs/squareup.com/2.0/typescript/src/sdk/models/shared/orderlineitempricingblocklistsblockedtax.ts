import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderLineItemPricingBlocklistsBlockedTax
/** 
 * A tax to block from applying to a line item. The tax must be 
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
**/
export class OrderLineItemPricingBlocklistsBlockedTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=tax_catalog_object_id" })
  taxCatalogObjectId?: string;

  @Metadata({ data: "json, name=tax_uid" })
  taxUid?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
