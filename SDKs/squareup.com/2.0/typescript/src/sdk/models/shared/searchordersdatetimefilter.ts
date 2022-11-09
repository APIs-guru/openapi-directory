import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeRange } from "./timerange";
import { TimeRange } from "./timerange";
import { TimeRange } from "./timerange";


// SearchOrdersDateTimeFilter
/** 
 * Filter for `Order` objects based on whether their `CREATED_AT`,
 * `CLOSED_AT`, or `UPDATED_AT` timestamps fall within a specified time range.
 * You can specify the time range and which timestamp to filter for. You can filter
 * for only one time range at a time.
 * 
 * For each time range, the start time and end time are inclusive. If the end time
 * is absent, it defaults to the time of the first request for the cursor.
 * 
 * __Important:__ If you use the `DateTimeFilter` in a `SearchOrders` query,
 * you must set the `sort_field` in [OrdersSort](https://developer.squareup.com/reference/square_2021-08-18/objects/SearchOrdersSort)
 * to the same field you filter for. For example, if you set the `CLOSED_AT` field
 * in `DateTimeFilter`, you must set the `sort_field` in `SearchOrdersSort` to
 * `CLOSED_AT`. Otherwise, `SearchOrders` throws an error.
 * [Learn more about filtering orders by time range.](https://developer.squareup.com/docs/orders-api/manage-orders#important-note-on-filtering-orders-by-time-range)
**/
export class SearchOrdersDateTimeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_at" })
  closedAt?: TimeRange;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: TimeRange;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: TimeRange;
}
