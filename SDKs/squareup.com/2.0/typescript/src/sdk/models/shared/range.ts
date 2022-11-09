import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * The range of a number value between the specified lower and upper bounds.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: string;

  @Metadata({ data: "json, name=min" })
  min?: string;
}
