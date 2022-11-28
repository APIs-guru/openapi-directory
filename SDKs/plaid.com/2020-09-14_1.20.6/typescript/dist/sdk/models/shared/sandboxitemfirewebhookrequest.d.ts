import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SandboxItemFireWebhookRequestWebhookCodeEnum {
    DefaultUpdate = "DEFAULT_UPDATE"
}
/**
 * SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
**/
export declare class SandboxItemFireWebhookRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
    webhookCode: SandboxItemFireWebhookRequestWebhookCodeEnum;
}
