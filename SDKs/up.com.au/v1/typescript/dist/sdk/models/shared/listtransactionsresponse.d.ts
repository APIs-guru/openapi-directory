import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionResource } from "./transactionresource";
export declare class ListTransactionsResponseLinks extends SpeakeasyBase {
    next: string;
    prev: string;
}
/**
 * Successful response to get all transactions. This returns a paginated
 * list of transactions, which can be scrolled by following the `prev` and
 * `next` links if present.
 *
**/
export declare class ListTransactionsResponse extends SpeakeasyBase {
    data: TransactionResource[];
    links: ListTransactionsResponseLinks;
}
