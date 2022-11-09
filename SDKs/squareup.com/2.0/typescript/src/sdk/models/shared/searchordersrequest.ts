import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchOrdersQuery } from "./searchordersquery";


// SearchOrdersRequest
/** 
 * The request does not have any required fields. When given no query criteria,
 * `SearchOrders` returns all results for all of the seller's locations. When retrieving additional
 * pages using a `cursor`, the `query` must be equal to the `query` used to retrieve the first page of
 * results.
**/
export class SearchOrdersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=location_ids" })
  locationIds?: string[];

  @Metadata({ data: "json, name=query" })
  query?: SearchOrdersQuery;

  @Metadata({ data: "json, name=return_entries" })
  returnEntries?: boolean;
}
