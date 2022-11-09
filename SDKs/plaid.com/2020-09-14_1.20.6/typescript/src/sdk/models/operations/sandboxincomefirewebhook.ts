import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxIncomeFireWebhookRequest;
}


export class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxIncomeFireWebhookResponse?: shared.SandboxIncomeFireWebhookResponse;

  @Metadata()
  statusCode: number;
}
