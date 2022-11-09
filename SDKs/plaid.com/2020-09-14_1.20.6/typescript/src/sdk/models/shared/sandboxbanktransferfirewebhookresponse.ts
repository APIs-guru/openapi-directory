import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxBankTransferFireWebhookResponse
/** 
 * SandboxBankTransferFireWebhookResponse defines the response schema for `/sandbox/bank_transfer/fire_webhook`
**/
export class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=request_id" })
  requestId: string;
}
