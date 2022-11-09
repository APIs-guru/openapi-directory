import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// AddGroupToCustomerResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [AddGroupToCustomer](https://developer.squareup.com/reference/square_2021-08-18/customers-api/add-group-to-customer) endpoint.
**/
export class AddGroupToCustomerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
