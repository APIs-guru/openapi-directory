import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmployeeInfo
/** 
 * The employee info model
**/
export class EmployeeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=employeeId" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: string;

  @SpeakeasyMetadata({ data: "json, name=statusTypeCode" })
  statusTypeCode?: string;
}
