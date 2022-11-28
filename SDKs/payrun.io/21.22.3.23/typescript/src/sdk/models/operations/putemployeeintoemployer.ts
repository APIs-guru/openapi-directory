import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEmployeeIntoEmployerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PutEmployeeIntoEmployerHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutEmployeeIntoEmployerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEmployeeIntoEmployerPathParams;

  @SpeakeasyMetadata()
  headers: PutEmployeeIntoEmployerHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Employee;
}


export class PutEmployeeIntoEmployerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  employee?: shared.Employee;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
