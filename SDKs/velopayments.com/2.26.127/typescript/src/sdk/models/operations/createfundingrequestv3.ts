import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFundingRequestV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class CreateFundingRequestV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateFundingRequestV3PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FundingRequestV3;
}


export class CreateFundingRequestV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
