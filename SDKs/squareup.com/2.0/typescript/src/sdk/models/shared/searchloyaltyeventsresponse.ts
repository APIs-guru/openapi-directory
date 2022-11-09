import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";


// SearchLoyaltyEventsResponse
/** 
 * A response that contains loyalty events that satisfy the search 
 * criteria, in order by the `created_at` date.
**/
export class SearchLoyaltyEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=events", elemType: shared.LoyaltyEvent })
  events?: LoyaltyEvent[];
}
