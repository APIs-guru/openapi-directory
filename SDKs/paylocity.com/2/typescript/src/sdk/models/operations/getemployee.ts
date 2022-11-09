import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;
}


export class GetEmployeeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployeePathParams;

  @Metadata()
  security: GetEmployeeSecurity;
}


export class GetEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Employee })
  employees?: shared.Employee[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
