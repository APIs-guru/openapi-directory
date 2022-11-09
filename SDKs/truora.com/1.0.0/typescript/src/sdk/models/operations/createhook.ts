import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CreateHookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: shared.CreateHookInput;

  @Metadata()
  security: CreateHookSecurity;
}


export class CreateHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hook?: shared.Hook;

  @Metadata()
  statusCode: number;
}
