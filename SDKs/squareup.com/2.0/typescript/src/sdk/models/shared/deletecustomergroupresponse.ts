import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteCustomerGroupResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [DeleteCustomerGroup](https://developer.squareup.com/reference/square_2021-08-18/customer-groups-api/delete-customer-group) endpoint.
**/
export class DeleteCustomerGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
