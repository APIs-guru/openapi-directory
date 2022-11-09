import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RenewTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client_id" })
  clientId: string;
}


export class RenewTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  oauth2ClientSecret: shared.SchemeOauth2ClientSecret;
}


export class RenewTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RenewTokenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RenewTokenRequest;

  @Metadata()
  security: RenewTokenSecurity;
}


export class RenewTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  renewTokenResponse?: shared.RenewTokenResponse;

  @Metadata()
  statusCode: number;
}
