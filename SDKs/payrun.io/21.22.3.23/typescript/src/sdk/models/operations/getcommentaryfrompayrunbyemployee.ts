import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommentaryFromPayRunByEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayRunId" })
  payRunId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayScheduleId" })
  payScheduleId: string;
}


export class GetCommentaryFromPayRunByEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCommentaryFromPayRunByEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCommentaryFromPayRunByEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetCommentaryFromPayRunByEmployeeHeaders;
}


export class GetCommentaryFromPayRunByEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentary?: shared.Commentary;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
