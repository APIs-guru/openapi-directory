import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsAccessTokensDeAuthenticatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" })
  accessTokens: string;
}


export class GetAppsAccessTokensDeAuthenticateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAppsAccessTokensDeAuthenticateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAccessTokensDeAuthenticatePathParams;

  @Metadata()
  queryParams: GetAppsAccessTokensDeAuthenticateQueryParams;
}


export class GetAppsAccessTokensDeAuthenticateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
