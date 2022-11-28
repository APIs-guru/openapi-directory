import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DateFormat
/** 
 * The date format setting for the budget.  In some cases the format will not be available and will be specified as null.
**/
export class DateFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format: string;
}
