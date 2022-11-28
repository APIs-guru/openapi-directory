import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ClientAuthRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}


export class ClientAuthRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType: ClientAuthRequestBodyGrantTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: string;
}


export class ClientAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ClientAuthRequestBody;
}


export class ClientAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  auth?: shared.Auth;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
