import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CisInstructionId" })
  cisInstructionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PutCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PutCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCisInstructionIntoSubContractorPathParams;

  @Metadata()
  headers: PutCisInstructionIntoSubContractorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CisInstruction;
}


export class PutCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
  @Metadata()
  cisInstruction?: shared.CisInstruction;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;
}
