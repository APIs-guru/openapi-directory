import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccessTokensAccessTokensInvalidatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" })
  accessTokens: string;
}


export class GetAccessTokensAccessTokensInvalidateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAccessTokensAccessTokensInvalidateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccessTokensAccessTokensInvalidatePathParams;

  @Metadata()
  queryParams: GetAccessTokensAccessTokensInvalidateQueryParams;
}


export class GetAccessTokensAccessTokensInvalidateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
