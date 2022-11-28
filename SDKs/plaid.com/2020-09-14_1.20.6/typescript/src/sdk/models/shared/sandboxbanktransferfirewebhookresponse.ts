import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxBankTransferFireWebhookResponse
/** 
 * SandboxBankTransferFireWebhookResponse defines the response schema for `/sandbox/bank_transfer/fire_webhook`
**/
export class SandboxBankTransferFireWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
