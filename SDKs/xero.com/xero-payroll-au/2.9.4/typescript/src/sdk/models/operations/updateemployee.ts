import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeID" })
  employeeId: string;
}


export class UpdateEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class UpdateEmployeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEmployeePathParams;

  @SpeakeasyMetadata()
  headers: UpdateEmployeeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.EmployeeInput })
  request?: shared.EmployeeInput[];

  @SpeakeasyMetadata()
  security: UpdateEmployeeSecurity;
}


export class UpdateEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employees?: shared.Employees;

  @SpeakeasyMetadata()
  statusCode: number;
}
