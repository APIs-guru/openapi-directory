import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchSubscriptionsQuery } from "./searchsubscriptionsquery";


// SearchSubscriptionsRequest
/** 
 * Defines parameters in a
 * [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint
 * request.
**/
export class SearchSubscriptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: SearchSubscriptionsQuery;
}
