import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmployeeInfo
/** 
 * The employee info model
**/
export class EmployeeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @Metadata({ data: "json, name=statusTypeCode" })
  statusTypeCode?: string;
}
