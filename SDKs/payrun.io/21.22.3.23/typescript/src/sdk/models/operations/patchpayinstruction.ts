import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchPayInstructionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" })
  payInstructionId: string;
}


export class PatchPayInstructionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PatchPayInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchPayInstructionPathParams;

  @SpeakeasyMetadata()
  headers: PatchPayInstructionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayInstruction;
}


export class PatchPayInstructionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  payInstruction?: shared.PayInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
