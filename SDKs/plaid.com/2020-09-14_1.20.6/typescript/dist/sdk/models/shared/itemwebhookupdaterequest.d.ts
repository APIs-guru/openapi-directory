import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ItemWebhookUpdateRequest defines the request schema for `/item/webhook/update`
**/
export declare class ItemWebhookUpdateRequest extends SpeakeasyBase {
    accessToken: string;
    clientId?: string;
    secret?: string;
    webhook: string;
}
