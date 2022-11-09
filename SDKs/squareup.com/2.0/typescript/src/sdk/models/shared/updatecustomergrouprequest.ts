import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerGroup } from "./customergroup";


// UpdateCustomerGroupRequest
/** 
 * Defines the body parameters that can be included in a request to the
 * [UpdateCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/update-customer-group) endpoint.
**/
export class UpdateCustomerGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group: CustomerGroup;
}
