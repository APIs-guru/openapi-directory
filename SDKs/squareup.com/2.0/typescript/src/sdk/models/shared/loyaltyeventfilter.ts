import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoyaltyEventDateTimeFilter } from "./loyaltyeventdatetimefilter";
import { LoyaltyEventLocationFilter } from "./loyaltyeventlocationfilter";
import { LoyaltyEventLoyaltyAccountFilter } from "./loyaltyeventloyaltyaccountfilter";
import { LoyaltyEventOrderFilter } from "./loyaltyeventorderfilter";
import { LoyaltyEventTypeFilter } from "./loyaltyeventtypefilter";


// LoyaltyEventFilter
/** 
 * The filtering criteria. If the request specifies multiple filters, 
 * the endpoint uses a logical AND to evaluate them.
**/
export class LoyaltyEventFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_time_filter" })
  dateTimeFilter?: LoyaltyEventDateTimeFilter;

  @Metadata({ data: "json, name=location_filter" })
  locationFilter?: LoyaltyEventLocationFilter;

  @Metadata({ data: "json, name=loyalty_account_filter" })
  loyaltyAccountFilter?: LoyaltyEventLoyaltyAccountFilter;

  @Metadata({ data: "json, name=order_filter" })
  orderFilter?: LoyaltyEventOrderFilter;

  @Metadata({ data: "json, name=type_filter" })
  typeFilter?: LoyaltyEventTypeFilter;
}
