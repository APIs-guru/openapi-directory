import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAchFundingRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class CreateAchFundingRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAchFundingRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FundingRequestV1;
}


export class CreateAchFundingRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse404?: any;
}
