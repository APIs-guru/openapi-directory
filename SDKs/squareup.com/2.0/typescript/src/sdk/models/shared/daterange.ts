import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateRange
/** 
 * A range defined by two dates. Used for filtering a query for Connect v2
 * objects that have date properties.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_date" })
  endDate?: string;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;
}
