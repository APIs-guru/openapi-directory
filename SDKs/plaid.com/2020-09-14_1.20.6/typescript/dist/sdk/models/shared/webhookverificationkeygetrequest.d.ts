import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
**/
export declare class WebhookVerificationKeyGetRequest extends SpeakeasyBase {
    clientId?: string;
    keyId: string;
    secret?: string;
}
