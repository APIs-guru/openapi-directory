import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventQuery } from "./loyaltyeventquery";


// SearchLoyaltyEventsRequest
/** 
 * A request to search for loyalty events.
**/
export class SearchLoyaltyEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=query" })
  query?: LoyaltyEventQuery;
}
