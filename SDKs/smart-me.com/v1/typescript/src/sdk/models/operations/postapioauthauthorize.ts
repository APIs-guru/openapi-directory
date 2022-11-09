import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostApiOauthAuthorizeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=client_secret" })
  clientSecret?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class PostApiOauthAuthorizeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostApiOauthAuthorizeQueryParams;
}


export class PostApiOauthAuthorizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
