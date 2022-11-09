import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListHookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListHookRequest extends SpeakeasyBase {
  @Metadata()
  security: ListHookSecurity;
}


export class ListHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hookOutput?: shared.HookOutput;

  @Metadata()
  statusCode: number;
}
