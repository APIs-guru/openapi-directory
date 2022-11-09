import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Customer } from "./customer";
import { Error } from "./error";


// CreateCustomerResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `CreateCustomer` endpoint.
 * 
 * Either `errors` or `customer` is present in a given response (never both).
**/
export class CreateCustomerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: Customer;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
