import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmployeeWage } from "./employeewage";
import { Error } from "./error";


// GetEmployeeWageResponse
/** 
 * A response to a request to get an `EmployeeWage`. The response contains
 * the requested `EmployeeWage` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
**/
export class GetEmployeeWageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=employee_wage" })
  employeeWage?: EmployeeWage;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
