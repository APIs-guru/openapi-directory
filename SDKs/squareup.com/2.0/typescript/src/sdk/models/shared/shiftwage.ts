import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// ShiftWage
/** 
 * The hourly wage rate used to compensate an employee for this shift.
**/
export class ShiftWage extends SpeakeasyBase {
  @Metadata({ data: "json, name=hourly_rate" })
  hourlyRate?: Money;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
