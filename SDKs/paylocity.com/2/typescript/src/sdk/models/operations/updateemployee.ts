import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class UpdateEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class UpdateEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmployeePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Employee;

  @Metadata()
  security: UpdateEmployeeSecurity;
}


export class UpdateEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
