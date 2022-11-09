import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Transaction } from "./transaction";


// ListTransactionsResponse
/** 
 * Defines the fields that are included in the response body of
 * a request to the [ListTransactions](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/list-transactions) endpoint.
 * 
 * One of `errors` or `transactions` is present in a given response (never both).
**/
export class ListTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=transactions", elemType: shared.Transaction })
  transactions?: Transaction[];
}
