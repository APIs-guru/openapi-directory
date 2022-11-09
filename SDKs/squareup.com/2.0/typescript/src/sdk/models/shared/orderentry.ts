import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrderEntry
/** 
 * A lightweight description of an [order](https://developer.squareup.com/reference/square_2021-08-18/objects/Order) that is returned when 
 * `returned_entries` is `true` on a [SearchOrdersRequest](https://developer.squareup.com/reference/square_2021-08-18/orders-api/search-orders).
**/
export class OrderEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
