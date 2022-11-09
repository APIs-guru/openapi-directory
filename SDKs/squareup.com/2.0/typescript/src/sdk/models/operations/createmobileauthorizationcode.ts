import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMobileAuthorizationCodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateMobileAuthorizationCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateMobileAuthorizationCodeRequest;

  @Metadata()
  security: CreateMobileAuthorizationCodeSecurity;
}


export class CreateMobileAuthorizationCodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createMobileAuthorizationCodeResponse?: shared.CreateMobileAuthorizationCodeResponse;

  @Metadata()
  statusCode: number;
}
