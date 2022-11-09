import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DateFormat
/** 
 * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
export class DateFormat extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format: string;
}
