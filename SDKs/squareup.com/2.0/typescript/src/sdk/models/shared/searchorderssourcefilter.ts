import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrdersSourceFilter
/** 
 * A filter based on order `source` information.
**/
export class SearchOrdersSourceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=source_names" })
  sourceNames?: string[];
}
