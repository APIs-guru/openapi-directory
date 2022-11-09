import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class PatchEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchEmployeePathParams;

  @Metadata()
  headers: PatchEmployeeHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Employee;
}


export class PatchEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employee?: shared.Employee;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
