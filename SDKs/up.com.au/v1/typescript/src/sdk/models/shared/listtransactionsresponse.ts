import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionResource } from "./transactionresource";



export class ListTransactionsResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next" })
  next: string;

  @SpeakeasyMetadata({ data: "json, name=prev" })
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
  @SpeakeasyMetadata({ data: "json, name=data", elemType: TransactionResource })
  data: TransactionResource[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ListTransactionsResponseLinks;
}
