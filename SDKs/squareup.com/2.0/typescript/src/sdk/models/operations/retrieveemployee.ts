import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=employee_id" })
  employeeId: string;
}


export class RetrieveEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveEmployeePathParams;

  @Metadata()
  security: RetrieveEmployeeSecurity;
}


export class RetrieveEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  v1Employee?: shared.V1Employee;
}
