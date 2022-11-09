import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SandboxBankTransferFireWebhookRequest;
}


export class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  sandboxBankTransferFireWebhookResponse?: shared.SandboxBankTransferFireWebhookResponse;

  @Metadata()
  statusCode: number;
}
