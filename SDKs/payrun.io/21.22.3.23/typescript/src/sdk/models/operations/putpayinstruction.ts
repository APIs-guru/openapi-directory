import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutPayInstructionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" })
  payInstructionId: string;
}


export class PutPayInstructionHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutPayInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutPayInstructionPathParams;

  @SpeakeasyMetadata()
  headers: PutPayInstructionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PayInstruction;
}


export class PutPayInstructionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  payInstruction?: shared.PayInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
