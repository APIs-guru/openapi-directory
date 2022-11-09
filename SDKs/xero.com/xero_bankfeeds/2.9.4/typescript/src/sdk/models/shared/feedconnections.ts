import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FeedConnection } from "./feedconnection";
import { Pagination } from "./pagination";


// FeedConnections
/** 
 * https://developer.xero.com/documentation/bank-feeds-api/feed-connections
**/
export class FeedConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.FeedConnection })
  items?: FeedConnection[];

  @Metadata({ data: "json, name=pagination" })
  pagination?: Pagination;
}
