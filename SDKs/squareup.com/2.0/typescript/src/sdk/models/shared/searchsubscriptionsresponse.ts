import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Subscription } from "./subscription";


// SearchSubscriptionsResponse
/** 
 * Defines the fields that are included in the response from the
 * [SearchSubscriptions](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/search-subscriptions) endpoint.
**/
export class SearchSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=subscriptions", elemType: shared.Subscription })
  subscriptions?: Subscription[];
}
