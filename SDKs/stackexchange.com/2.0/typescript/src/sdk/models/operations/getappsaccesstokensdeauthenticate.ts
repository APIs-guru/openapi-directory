import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsAccessTokensDeAuthenticatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" })
  accessTokens: string;
}


export class GetAppsAccessTokensDeAuthenticateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAppsAccessTokensDeAuthenticateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAccessTokensDeAuthenticatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAppsAccessTokensDeAuthenticateQueryParams;
}


export class GetAppsAccessTokensDeAuthenticateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
