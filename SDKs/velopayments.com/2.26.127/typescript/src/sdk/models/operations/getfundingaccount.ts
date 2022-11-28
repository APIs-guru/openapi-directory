import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFundingAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fundingAccountId" })
  fundingAccountId: string;
}


export class GetFundingAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetFundingAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFundingAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFundingAccountQueryParams;
}


export class GetFundingAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fundingAccountResponse?: shared.FundingAccountResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;
}
