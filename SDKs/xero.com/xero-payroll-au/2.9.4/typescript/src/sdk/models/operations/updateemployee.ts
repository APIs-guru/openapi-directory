import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeID" })
  employeeId: string;
}


export class UpdateEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmployeePathParams;

  @Metadata()
  headers: UpdateEmployeeHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Employee })
  request?: shared.Employee[];

  @Metadata()
  security: UpdateEmployeeSecurity;
}


export class UpdateEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employees?: shared.Employees;

  @Metadata()
  statusCode: number;
}
