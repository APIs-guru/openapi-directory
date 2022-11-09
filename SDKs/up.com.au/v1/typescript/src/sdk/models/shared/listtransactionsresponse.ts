import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransactionResource } from "./transactionresource";


export class ListTransactionsResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=next" })
  next: string;

  @Metadata({ data: "json, name=prev" })
  prev: string;
}


// ListTransactionsResponse
/** 
 * Successful response to get all transactions. This returns a paginated
 * list of transactions, which can be scrolled by following the `prev` and
 * `next` links if present.
 * 
**/
export class ListTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TransactionResource })
  data: TransactionResource[];

  @Metadata({ data: "json, name=links" })
  links: ListTransactionsResponseLinks;
}
