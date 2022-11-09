import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ClientAuthRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}


export class ClientAuthRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=grant_type" })
  grantType: ClientAuthRequestBodyGrantTypeEnum;

  @Metadata({ data: "json, name=scope" })
  scope: string;
}


export class ClientAuthRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/vnd.vimeo.auth+json" })
  request: ClientAuthRequestBody;
}


export class ClientAuthResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  auth?: shared.Auth;

  @Metadata()
  error?: shared.Error;
}
