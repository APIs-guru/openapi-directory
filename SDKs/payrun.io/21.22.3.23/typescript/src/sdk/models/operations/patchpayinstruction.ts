import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchPayInstructionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" })
  payInstructionId: string;
}


export class PatchPayInstructionHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPayInstructionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchPayInstructionPathParams;

  @Metadata()
  headers: PatchPayInstructionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PayInstruction;
}


export class PatchPayInstructionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  payInstruction?: shared.PayInstruction;

  @Metadata()
  statusCode: number;
}
