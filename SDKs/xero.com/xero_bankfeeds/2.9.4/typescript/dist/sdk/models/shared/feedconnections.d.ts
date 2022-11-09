import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FeedConnection } from "./feedconnection";
import { Pagination } from "./pagination";
/**
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export declare class FeedConnections extends SpeakeasyBase {
    items?: FeedConnection[];
    pagination?: Pagination;
}
