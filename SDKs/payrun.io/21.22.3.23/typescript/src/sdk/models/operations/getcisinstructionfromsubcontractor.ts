import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCisInstructionFromSubContractorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" })
  cisInstructionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class GetCisInstructionFromSubContractorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetCisInstructionFromSubContractorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCisInstructionFromSubContractorPathParams;

  @SpeakeasyMetadata()
  headers: GetCisInstructionFromSubContractorHeaders;
}


export class GetCisInstructionFromSubContractorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cisInstruction?: shared.CisInstruction;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
