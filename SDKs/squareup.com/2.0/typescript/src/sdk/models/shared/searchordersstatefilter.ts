import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchOrdersStateFilter
/** 
 * Filter by the current order `state`.
**/
export class SearchOrdersStateFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=states" })
  states: string[];
}
