import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompanyEmployeesEmployeeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: number;
}


export class GetCompanyEmployeesEmployeeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompanyEmployeesEmployeeIdPathParams;
}


export class GetCompanyEmployeesEmployeeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employeeResponse?: shared.EmployeeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
