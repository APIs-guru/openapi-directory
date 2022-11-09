import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutReportingInstructionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReportingInstructionId" })
  reportingInstructionId: string;
}


export class PutReportingInstructionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutReportingInstructionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutReportingInstructionPathParams;

  @Metadata()
  headers: PutReportingInstructionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReportingInstruction;
}


export class PutReportingInstructionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  reportingInstruction?: shared.ReportingInstruction;

  @Metadata()
  statusCode: number;
}
