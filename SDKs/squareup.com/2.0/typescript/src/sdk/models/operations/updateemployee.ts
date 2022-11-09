import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}


export class UpdateEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmployeePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.V1Employee;

  @Metadata()
  security: UpdateEmployeeSecurity;
}


export class UpdateEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Employee?: shared.V1Employee;
}
