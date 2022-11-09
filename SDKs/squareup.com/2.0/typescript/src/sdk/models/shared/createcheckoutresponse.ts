import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Checkout } from "./checkout";
import { Error } from "./error";


// CreateCheckoutResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the `CreateCheckout` endpoint.
**/
export class CreateCheckoutResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout" })
  checkout?: Checkout;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
