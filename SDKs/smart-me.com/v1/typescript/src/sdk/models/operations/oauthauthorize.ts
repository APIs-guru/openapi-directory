import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OAuthAuthorizeQueryParams extends SpeakeasyBase {
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


export class OAuthAuthorizeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OAuthAuthorizeQueryParams;
}


export class OAuthAuthorizeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
