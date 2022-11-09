import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrdersFulfillmentFilter
/** 
 * Filter based on [order fulfillment](https://developer.squareup.com/reference/square_2021-08-18/objects/OrderFulfillment) information.
**/
export class SearchOrdersFulfillmentFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfillment_states" })
  fulfillmentStates?: string[];

  @Metadata({ data: "json, name=fulfillment_types" })
  fulfillmentTypes?: string[];
}
