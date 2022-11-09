import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Transaction } from "./transaction";


// ChargeResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [Charge](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/charge) endpoint.
 * 
 * One of `errors` or `transaction` is present in a given response (never both).
**/
export class ChargeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=transaction" })
  transaction?: Transaction;
}
