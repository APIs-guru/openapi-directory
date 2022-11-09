import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrdersCustomerFilter
/** 
 * A filter based on the order `customer_id` and any tender `customer_id`
 * associated with the order. It does not filter based on the
 * [FulfillmentRecipient](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillmentRecipient) `customer_id`.
**/
export class SearchOrdersCustomerFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_ids" })
  customerIds?: string[];
}
