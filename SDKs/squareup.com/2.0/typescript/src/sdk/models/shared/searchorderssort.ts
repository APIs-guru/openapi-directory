import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrdersSort
/** 
 * Sorting criteria for a `SearchOrders` request. Results can only be sorted
 * by a timestamp field.
**/
export class SearchOrdersSort extends SpeakeasyBase {
  @Metadata({ data: "json, name=sort_field" })
  sortField: string;

  @Metadata({ data: "json, name=sort_order" })
  sortOrder?: string;
}
