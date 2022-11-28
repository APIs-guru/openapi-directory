import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListHookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListHookSecurity;
}


export class ListHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  hookOutput?: shared.HookOutput;

  @SpeakeasyMetadata()
  statusCode: number;
}
