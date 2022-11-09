import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// VoidTransactionResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [VoidTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/void-transaction) endpoint.
**/
export class VoidTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
