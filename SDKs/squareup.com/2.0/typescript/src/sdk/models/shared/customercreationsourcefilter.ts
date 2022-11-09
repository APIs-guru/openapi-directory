import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerCreationSourceFilter
/** 
 * The creation source filter.
 * 
 * If one or more creation sources are set, customer profiles are included in,
 * or excluded from, the result if they match at least one of the filter criteria.
**/
export class CustomerCreationSourceFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=rule" })
  rule?: string;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
