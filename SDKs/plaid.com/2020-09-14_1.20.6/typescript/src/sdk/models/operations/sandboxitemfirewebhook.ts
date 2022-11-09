import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxItemFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxItemFireWebhookRequest;
}


export class SandboxItemFireWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxItemFireWebhookResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
