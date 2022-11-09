import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchSubscriptionsFilter
/** 
 * Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions.
**/
export class SearchSubscriptionsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_ids" })
  customerIds?: string[];

  @Metadata({ data: "json, name=location_ids" })
  locationIds?: string[];
}
