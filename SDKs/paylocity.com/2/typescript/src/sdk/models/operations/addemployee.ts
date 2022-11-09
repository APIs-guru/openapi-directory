import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class AddEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddEmployeePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Employee;

  @Metadata()
  security: AddEmployeeSecurity;
}


export class AddEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.EmployeeIdResponse })
  employeeIdResponses?: shared.EmployeeIdResponse[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
