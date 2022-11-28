import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetEmployeeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmployeePathParams;

  @SpeakeasyMetadata()
  security: GetEmployeeSecurity;
}


export class GetEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Employee })
  employees?: shared.Employee[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
