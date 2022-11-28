import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPayInstructionFromEmployeePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PayInstructionId" })
  payInstructionId: string;
}


export class GetPayInstructionFromEmployeeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPayInstructionFromEmployeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPayInstructionFromEmployeePathParams;

  @SpeakeasyMetadata()
  headers: GetPayInstructionFromEmployeeHeaders;
}


export class GetPayInstructionFromEmployeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  payInstruction?: shared.PayInstruction;

  @SpeakeasyMetadata()
  statusCode: number;
}
