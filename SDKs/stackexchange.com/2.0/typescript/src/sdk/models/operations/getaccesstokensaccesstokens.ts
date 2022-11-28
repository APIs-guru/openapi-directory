import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccessTokensAccessTokensPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessTokens" })
  accessTokens: string;
}


export class GetAccessTokensAccessTokensQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAccessTokensAccessTokensRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccessTokensAccessTokensPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccessTokensAccessTokensQueryParams;
}


export class GetAccessTokensAccessTokensResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
