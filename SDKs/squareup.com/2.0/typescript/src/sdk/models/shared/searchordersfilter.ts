import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchOrdersCustomerFilter } from "./searchorderscustomerfilter";
import { SearchOrdersDateTimeFilter } from "./searchordersdatetimefilter";
import { SearchOrdersFulfillmentFilter } from "./searchordersfulfillmentfilter";
import { SearchOrdersSourceFilter } from "./searchorderssourcefilter";
import { SearchOrdersStateFilter } from "./searchordersstatefilter";


// SearchOrdersFilter
/** 
 * Filtering criteria to use for a `SearchOrders` request. Multiple filters
 * are ANDed together.
**/
export class SearchOrdersFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_filter" })
  customerFilter?: SearchOrdersCustomerFilter;

  @Metadata({ data: "json, name=date_time_filter" })
  dateTimeFilter?: SearchOrdersDateTimeFilter;

  @Metadata({ data: "json, name=fulfillment_filter" })
  fulfillmentFilter?: SearchOrdersFulfillmentFilter;

  @Metadata({ data: "json, name=source_filter" })
  sourceFilter?: SearchOrdersSourceFilter;

  @Metadata({ data: "json, name=state_filter" })
  stateFilter?: SearchOrdersStateFilter;
}
