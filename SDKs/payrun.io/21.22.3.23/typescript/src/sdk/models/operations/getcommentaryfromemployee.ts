import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommentaryFromEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CommentaryId" })
  commentaryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;
}


export class GetCommentaryFromEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCommentaryFromEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommentaryFromEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetCommentaryFromEmployeeHeaders;
}


export class GetCommentaryFromEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentary?: shared.Commentary;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
