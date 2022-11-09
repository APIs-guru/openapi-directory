import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ItemWebhookUpdateRequest extends SpeakeasyBase {
    request: shared.ItemWebhookUpdateRequest;
}
export declare class ItemWebhookUpdateResponse extends SpeakeasyBase {
    contentType: string;
    itemWebhookUpdateResponse?: Map<string, any>;
    statusCode: number;
}
