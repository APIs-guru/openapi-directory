import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// CaptureTransactionResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [CaptureTransaction](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/capture-transaction) endpoint.
**/
export class CaptureTransactionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
