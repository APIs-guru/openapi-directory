import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUsersIdAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PostUsersIdAccountsRequestBodyTypeEnum {
    Bank = "bank",
    Credits = "credits",
    Loans = "loans",
    Mortgage = "mortgage",
    Stocks = "stocks",
    Vehicle = "vehicle",
    Property = "property",
    OtherAsset = "other_asset",
    OtherLiability = "other_liability"
}


export class PostUsersIdAccountsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency_code" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PostUsersIdAccountsRequestBodyTypeEnum;
}


export class PostUsersIdAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUsersIdAccountsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostUsersIdAccountsRequestBody;
}


export class PostUsersIdAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  account?: shared.Account;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
