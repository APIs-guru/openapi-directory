import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentaryFromEmployeePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CommentaryId" })
  commentaryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetCommentaryFromEmployeeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCommentaryFromEmployeeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentaryFromEmployeePathParams;

  @Metadata()
  headers: GetCommentaryFromEmployeeHeaders;
}


export class GetCommentaryFromEmployeeResponse extends SpeakeasyBase {
  @Metadata()
  commentary?: shared.Commentary;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
