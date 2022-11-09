import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEmployeeRevisionByNumberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RevisionNumber" })
  revisionNumber: string;
}


export class GetEmployeeRevisionByNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetEmployeeRevisionByNumberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEmployeeRevisionByNumberPathParams;

  @Metadata()
  headers: GetEmployeeRevisionByNumberHeaders;
}


export class GetEmployeeRevisionByNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  employee?: shared.Employee;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
