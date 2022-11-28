import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhookDeleteRequest extends SpeakeasyBase {
    request: shared.SubscribeToEventBody;
}
export declare class WebhookDeleteResponse extends SpeakeasyBase {
    contentType: string;
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
}
