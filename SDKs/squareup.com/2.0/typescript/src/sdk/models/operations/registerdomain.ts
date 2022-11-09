import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegisterDomainRequest;

  @Metadata()
  security: RegisterDomainSecurity;
}


export class RegisterDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  registerDomainResponse?: shared.RegisterDomainResponse;

  @Metadata()
  statusCode: number;
}
