import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCisInstructionIntoSubContractorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmployerId" })
  employerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubContractorId" })
  subContractorId: string;
}


export class PostCisInstructionIntoSubContractorHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class PostCisInstructionIntoSubContractorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCisInstructionIntoSubContractorPathParams;

  @SpeakeasyMetadata()
  headers: PostCisInstructionIntoSubContractorHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CisInstruction;
}


export class PostCisInstructionIntoSubContractorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  link?: shared.Link;

  @SpeakeasyMetadata()
  statusCode: number;
}
