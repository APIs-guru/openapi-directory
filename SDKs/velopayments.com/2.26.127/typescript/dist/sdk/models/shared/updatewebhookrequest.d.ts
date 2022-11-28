import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    authorizationHeader?: string;
    categories?: CategoryEnum[];
    enabled?: boolean;
    webhookUrl?: string;
}
