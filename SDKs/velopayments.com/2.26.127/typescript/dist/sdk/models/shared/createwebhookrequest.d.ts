import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    authorizationHeader?: string;
    categories?: CategoryEnum[];
    enabled: boolean;
    payorId: string;
    webhookUrl: string;
}
