import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeID" })
  employeeId: string;
}


export class GetEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class GetEmployeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetEmployeeHeaders;

  @SpeakeasyMetadata()
  security: GetEmployeeSecurity;
}


export class GetEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employees?: shared.Employees;

  @SpeakeasyMetadata()
  statusCode: number;
}
