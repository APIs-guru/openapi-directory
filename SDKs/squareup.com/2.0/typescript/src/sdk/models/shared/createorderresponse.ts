import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Order } from "./order";


// CreateOrderResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `CreateOrder` endpoint.
 * 
 * Either `errors` or `order` is present in a given response, but never both.
**/
export class CreateOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
