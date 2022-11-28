import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFundingAccountV2PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fundingAccountId" })
  fundingAccountId: string;
}


export class GetFundingAccountV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetFundingAccountV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFundingAccountV2PathParams;

  @SpeakeasyMetadata()
  queryParams: GetFundingAccountV2QueryParams;
}


export class GetFundingAccountV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fundingAccountResponse2?: shared.FundingAccountResponse2;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
