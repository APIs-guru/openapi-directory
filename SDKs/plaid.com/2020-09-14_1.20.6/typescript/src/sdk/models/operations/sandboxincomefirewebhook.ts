import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxIncomeFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxIncomeFireWebhookRequest;
}


export class SandboxIncomeFireWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sandboxIncomeFireWebhookResponse?: shared.SandboxIncomeFireWebhookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
