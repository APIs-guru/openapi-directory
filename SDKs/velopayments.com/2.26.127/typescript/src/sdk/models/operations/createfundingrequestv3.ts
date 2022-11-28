import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFundingRequestV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class CreateFundingRequestV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateFundingRequestV3PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FundingRequestV3;
}


export class CreateFundingRequestV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
