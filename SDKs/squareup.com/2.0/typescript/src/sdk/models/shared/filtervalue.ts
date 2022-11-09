import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterValue
/** 
 * A filter to select resources based on an exact field value. For any given
 * value, the value can only be in one property. Depending on the field, either
 * all properties can be set or only a subset will be available.
 * 
 * Refer to the documentation of the field.
**/
export class FilterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: string[];

  @Metadata({ data: "json, name=any" })
  any?: string[];

  @Metadata({ data: "json, name=none" })
  none?: string[];
}
