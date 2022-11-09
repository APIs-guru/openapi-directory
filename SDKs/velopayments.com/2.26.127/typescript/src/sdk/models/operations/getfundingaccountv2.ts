import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFundingAccountV2PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fundingAccountId" })
  fundingAccountId: string;
}


export class GetFundingAccountV2QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetFundingAccountV2Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFundingAccountV2PathParams;

  @Metadata()
  queryParams: GetFundingAccountV2QueryParams;
}


export class GetFundingAccountV2Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fundingAccountResponse2?: shared.FundingAccountResponse2;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
