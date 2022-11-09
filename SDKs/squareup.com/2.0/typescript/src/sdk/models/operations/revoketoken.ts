import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  oauth2ClientSecret: shared.SchemeOauth2ClientSecret;
}


export class RevokeTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RevokeTokenRequest;

  @Metadata()
  security: RevokeTokenSecurity;
}


export class RevokeTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  revokeTokenResponse?: shared.RevokeTokenResponse;

  @Metadata()
  statusCode: number;
}
