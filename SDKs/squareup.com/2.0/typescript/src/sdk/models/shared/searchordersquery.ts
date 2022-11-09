import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SearchOrdersFilter } from "./searchordersfilter";
import { SearchOrdersSort } from "./searchorderssort";


// SearchOrdersQuery
/** 
 * Contains query criteria for the search.
**/
export class SearchOrdersQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: SearchOrdersFilter;

  @Metadata({ data: "json, name=sort" })
  sort?: SearchOrdersSort;
}
