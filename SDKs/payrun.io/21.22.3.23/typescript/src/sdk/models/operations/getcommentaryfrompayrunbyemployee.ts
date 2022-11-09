import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentaryFromPayRunByEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" })
  payRunId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class GetCommentaryFromPayRunByEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCommentaryFromPayRunByEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentaryFromPayRunByEmployeePathParams;

  @Metadata()
  headers: GetCommentaryFromPayRunByEmployeeHeaders;
}


export class GetCommentaryFromPayRunByEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  commentary?: shared.Commentary;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
