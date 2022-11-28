import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateEmployeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateEmployeeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.EmployeeInput })
  request: shared.EmployeeInput[];

  @SpeakeasyMetadata()
  security: CreateEmployeeSecurity;
}


export class CreateEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employees?: shared.Employees;

  @SpeakeasyMetadata()
  statusCode: number;
}
