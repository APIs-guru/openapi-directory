import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFundingRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sourceAccountId" })
  sourceAccountId: string;
}


export class CreateFundingRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateFundingRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FundingRequestV2;
}


export class CreateFundingRequestResponse extends SpeakeasyBase {
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
