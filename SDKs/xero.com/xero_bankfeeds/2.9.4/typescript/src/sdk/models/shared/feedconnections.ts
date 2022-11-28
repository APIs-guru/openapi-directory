import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FeedConnection } from "./feedconnection";
import { Pagination } from "./pagination";



// FeedConnections
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export class FeedConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: FeedConnection })
  items?: FeedConnection[];

  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
