import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// EmployeeWage
/** 
 * The hourly wage rate that an employee earns on a `Shift` for doing the job
 * specified by the `title` property of this object. Deprecated at version 2020-08-26. Use `TeamMemberWage` instead.
**/
export class EmployeeWage extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "json, name=hourly_rate" })
  hourlyRate?: Money;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
