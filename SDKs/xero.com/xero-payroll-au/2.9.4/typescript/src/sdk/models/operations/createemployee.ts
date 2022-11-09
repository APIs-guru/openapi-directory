import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" })
  xeroTenantId: string;
}


export class CreateEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateEmployeeHeaders;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Employee })
  request: shared.Employee[];

  @Metadata()
  security: CreateEmployeeSecurity;
}


export class CreateEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employees?: shared.Employees;

  @Metadata()
  statusCode: number;
}
