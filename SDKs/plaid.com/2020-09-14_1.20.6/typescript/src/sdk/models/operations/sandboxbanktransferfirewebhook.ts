import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxBankTransferFireWebhookRequest;
}


export class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  sandboxBankTransferFireWebhookResponse?: shared.SandboxBankTransferFireWebhookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
