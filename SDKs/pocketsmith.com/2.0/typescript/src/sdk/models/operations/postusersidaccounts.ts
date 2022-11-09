import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUsersIdAccountsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostUsersIdAccountsRequestBodyTypeEnum {
    Bank = "bank"
,    Credits = "credits"
,    Loans = "loans"
,    Mortgage = "mortgage"
,    Stocks = "stocks"
,    Vehicle = "vehicle"
,    Property = "property"
,    OtherAsset = "other_asset"
,    OtherLiability = "other_liability"
}


export class PostUsersIdAccountsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_code" })
  currencyCode: string;

  @Metadata({ data: "json, name=institution_id" })
  institutionId: number;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: PostUsersIdAccountsRequestBodyTypeEnum;
}


export class PostUsersIdAccountsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostUsersIdAccountsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdAccountsRequestBody;
}


export class PostUsersIdAccountsResponse extends SpeakeasyBase {
  @Metadata()
  account?: shared.Account;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
