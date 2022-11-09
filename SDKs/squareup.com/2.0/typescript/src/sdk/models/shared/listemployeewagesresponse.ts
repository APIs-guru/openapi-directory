import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmployeeWage } from "./employeewage";
import { Error } from "./error";


// ListEmployeeWagesResponse
/** 
 * The response to a request for a set of `EmployeeWage` objects. The response contains
 * a set of `EmployeeWage` objects.
**/
export class ListEmployeeWagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=employee_wages", elemType: shared.EmployeeWage })
  employeeWages?: EmployeeWage[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
