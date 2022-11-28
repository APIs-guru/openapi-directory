import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeIdResponse
/** 
 * The EmployeeId Response Model
**/
export class EmployeeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employeeId" })
  employeeId?: string;
}
