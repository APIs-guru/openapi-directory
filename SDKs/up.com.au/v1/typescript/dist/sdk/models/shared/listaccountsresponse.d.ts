import { SpeakeasyBase } from "../../../internal/utils";
import { AccountResource } from "./accountresource";
export declare class ListAccountsResponseLinks extends SpeakeasyBase {
    next: string;
    prev: string;
}
/**
 * Successful response to get all accounts. This returns a paginated list of
 * accounts, which can be scrolled by following the `prev` and `next` links
 * if present.
 *
**/
export declare class ListAccountsResponse extends SpeakeasyBase {
    data: AccountResource[];
    links: ListAccountsResponseLinks;
}
