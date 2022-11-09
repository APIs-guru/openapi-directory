import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxBankTransferFireWebhookRequest
/** 
 * SandboxBankTransferFireWebhookRequest defines the request schema for `/sandbox/bank_transfer/fire_webhook`
**/
export class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=webhook" })
  webhook: string;
}
