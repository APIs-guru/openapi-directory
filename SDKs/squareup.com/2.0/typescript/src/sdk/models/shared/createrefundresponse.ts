import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Refund } from "./refund";


// CreateRefundResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
 * 
 * One of `errors` or `refund` is present in a given response (never both).
**/
export class CreateRefundResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refund" })
  refund?: Refund;
}
