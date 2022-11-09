import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFundingAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fundingAccountId" })
  fundingAccountId: string;
}


export class GetFundingAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sensitive" })
  sensitive?: boolean;
}


export class GetFundingAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFundingAccountPathParams;

  @Metadata()
  queryParams: GetFundingAccountQueryParams;
}


export class GetFundingAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fundingAccountResponse?: shared.FundingAccountResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
