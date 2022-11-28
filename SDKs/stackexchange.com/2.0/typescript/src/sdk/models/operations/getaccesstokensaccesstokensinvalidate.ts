import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessTokensAccessTokensInvalidatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" })
  accessTokens: string;
}


export class GetAccessTokensAccessTokensInvalidateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAccessTokensAccessTokensInvalidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccessTokensAccessTokensInvalidatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccessTokensAccessTokensInvalidateQueryParams;
}


export class GetAccessTokensAccessTokensInvalidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
