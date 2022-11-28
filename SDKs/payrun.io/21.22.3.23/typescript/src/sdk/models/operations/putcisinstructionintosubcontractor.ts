import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" })
  cisInstructionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PutCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCisInstructionIntoSubContractorPathParams;

  @SpeakeasyMetadata()
  headers: PutCisInstructionIntoSubContractorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CisInstruction;
}


export class PutCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cisInstruction?: shared.CisInstruction;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
