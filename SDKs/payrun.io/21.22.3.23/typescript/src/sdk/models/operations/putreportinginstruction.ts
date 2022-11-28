import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutReportingInstructionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportingInstructionId" })
  reportingInstructionId: string;
}


export class PutReportingInstructionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutReportingInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutReportingInstructionPathParams;

  @SpeakeasyMetadata()
  headers: PutReportingInstructionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportingInstruction;
}


export class PutReportingInstructionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  reportingInstruction?: shared.ReportingInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
