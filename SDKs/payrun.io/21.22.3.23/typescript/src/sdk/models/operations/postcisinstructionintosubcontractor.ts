import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PostCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCisInstructionIntoSubContractorPathParams;

  @Metadata()
  headers: PostCisInstructionIntoSubContractorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CisInstruction;
}


export class PostCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  link?: shared.Link;

  @Metadata()
  statusCode: number;
}
