import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class AddEmployeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class AddEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddEmployeePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Employee;

  @SpeakeasyMetadata()
  security: AddEmployeeSecurity;
}


export class AddEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.EmployeeIdResponse })
  employeeIdResponses?: shared.EmployeeIdResponse[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
