import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchSubscriptionsFilter } from "./searchsubscriptionsfilter";


// SearchSubscriptionsQuery
/** 
 * Represents a query (including filtering criteria) used to search for subscriptions.
**/
export class SearchSubscriptionsQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: SearchSubscriptionsFilter;
}
