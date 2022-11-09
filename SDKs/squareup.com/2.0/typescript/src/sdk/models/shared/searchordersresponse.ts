import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { OrderEntry } from "./orderentry";
import { Order } from "./order";


// SearchOrdersResponse
/** 
 * Either the `order_entries` or `orders` field is set, depending on whether
 * `return_entries` is set on the [SearchOrdersRequest](https://developer.squareup.com/reference/square_2021-08-18/orders-api/search-orders).
**/
export class SearchOrdersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=order_entries", elemType: shared.OrderEntry })
  orderEntries?: OrderEntry[];

  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];
}
