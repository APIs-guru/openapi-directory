import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTerminalCheckoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateTerminalCheckoutRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateTerminalCheckoutRequest;

  @Metadata()
  security: CreateTerminalCheckoutSecurity;
}


export class CreateTerminalCheckoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createTerminalCheckoutResponse?: shared.CreateTerminalCheckoutResponse;

  @Metadata()
  statusCode: number;
}
