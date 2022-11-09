import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// RemoveGroupFromCustomerResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [RemoveGroupFromCustomer](https://developer.squareup.com/reference/square_2021-08-18/customers-api/remove-group-from-customer)
 * endpoint.
**/
export class RemoveGroupFromCustomerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
