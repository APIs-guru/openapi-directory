import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.TokenRequest;
}


export class AuthTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tokenResponse?: shared.TokenResponse;
}
