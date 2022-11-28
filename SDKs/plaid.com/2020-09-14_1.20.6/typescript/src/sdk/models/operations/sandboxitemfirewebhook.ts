import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxItemFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemFireWebhookRequest;
}


export class SandboxItemFireWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sandboxItemFireWebhookResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
