import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerGroup } from "./customergroup";


// CreateCustomerGroupRequest
/** 
 * Defines the body parameters that can be included in a request to the
 * [CreateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/create-customer-group) endpoint.
**/
export class CreateCustomerGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group: CustomerGroup;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;
}
