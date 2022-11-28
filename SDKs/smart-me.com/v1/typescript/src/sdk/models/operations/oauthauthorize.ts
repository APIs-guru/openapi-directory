import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OAuthAuthorizeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state: string;
}


export class OAuthAuthorizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OAuthAuthorizeQueryParams;
}


export class OAuthAuthorizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
