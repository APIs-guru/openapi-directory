import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShiftSort
/** 
 * Sets the sort order of search results.
**/
export class ShiftSort extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=order" })
  order?: string;
}
