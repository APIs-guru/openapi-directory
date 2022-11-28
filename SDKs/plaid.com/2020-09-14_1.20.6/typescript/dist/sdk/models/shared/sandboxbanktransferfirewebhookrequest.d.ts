import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SandboxBankTransferFireWebhookRequest defines the request schema for `/sandbox/bank_transfer/fire_webhook`
**/
export declare class SandboxBankTransferFireWebhookRequest extends SpeakeasyBase {
    clientId?: string;
    secret?: string;
    webhook: string;
}
