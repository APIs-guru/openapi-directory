import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Order } from "./order";


// BatchRetrieveOrdersResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `BatchRetrieveOrders` endpoint.
**/
export class BatchRetrieveOrdersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];
}
