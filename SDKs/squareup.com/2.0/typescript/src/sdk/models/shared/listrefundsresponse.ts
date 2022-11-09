import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Refund } from "./refund";


// ListRefundsResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [ListRefunds](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/list-refunds) endpoint.
 * 
 * One of `errors` or `refunds` is present in a given response (never both).
**/
export class ListRefundsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=refunds", elemType: shared.Refund })
  refunds?: Refund[];
}
