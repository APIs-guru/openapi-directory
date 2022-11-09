import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCompanyEmployeesEmployeeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: number;
}


export class GetCompanyEmployeesEmployeeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCompanyEmployeesEmployeeIdPathParams;
}


export class GetCompanyEmployeesEmployeeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employeeResponse?: shared.EmployeeResponse;

  @Metadata()
  statusCode: number;
}
