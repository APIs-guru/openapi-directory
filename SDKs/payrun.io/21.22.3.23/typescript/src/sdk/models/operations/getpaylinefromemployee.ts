import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPayLineFromEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayLineId" })
  payLineId: string;
}


export class GetPayLineFromEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayLineFromEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPayLineFromEmployeePathParams;

  @Metadata()
  headers: GetPayLineFromEmployeeHeaders;
}


export class GetPayLineFromEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  payLine?: shared.PayLine;

  @Metadata()
  statusCode: number;
}
