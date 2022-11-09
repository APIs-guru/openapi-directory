import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchRetrieveOrdersRequest
/** 
 * Defines the fields that are included in requests to the
 * `BatchRetrieveOrders` endpoint.
**/
export class BatchRetrieveOrdersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=order_ids" })
  orderIds: string[];
}
