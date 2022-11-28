import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxBankTransferFireWebhookRequest
/** 
 * SandboxBankTransferFireWebhookRequest defines the request schema for `/sandbox/bank_transfer/fire_webhook`
**/
export class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: string;
}
