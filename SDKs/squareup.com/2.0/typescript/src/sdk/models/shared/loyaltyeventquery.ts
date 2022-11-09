import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventFilter } from "./loyaltyeventfilter";


// LoyaltyEventQuery
/** 
 * Represents a query used to search for loyalty events.
**/
export class LoyaltyEventQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: LoyaltyEventFilter;
}
