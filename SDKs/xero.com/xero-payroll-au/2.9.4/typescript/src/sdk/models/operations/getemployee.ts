import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeID" })
  employeeId: string;
}


export class GetEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployeePathParams;

  @Metadata()
  headers: GetEmployeeHeaders;

  @Metadata()
  security: GetEmployeeSecurity;
}


export class GetEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employees?: shared.Employees;

  @Metadata()
  statusCode: number;
}
