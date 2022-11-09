import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportingInstructionFromEmployerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ReportingInstructionId" })
  reportingInstructionId: string;
}


export class GetReportingInstructionFromEmployerHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetReportingInstructionFromEmployerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportingInstructionFromEmployerPathParams;

  @Metadata()
  headers: GetReportingInstructionFromEmployerHeaders;
}


export class GetReportingInstructionFromEmployerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  reportingInstruction?: shared.ReportingInstruction;

  @Metadata()
  statusCode: number;
}
