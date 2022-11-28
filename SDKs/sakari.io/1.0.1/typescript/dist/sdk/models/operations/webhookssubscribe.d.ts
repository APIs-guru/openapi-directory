import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksSubscribePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class WebhooksSubscribeRequestBody extends SpeakeasyBase {
    eventTypes?: string[];
    url?: string;
}
export declare class WebhooksSubscribeSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class WebhooksSubscribeRequest extends SpeakeasyBase {
    pathParams: WebhooksSubscribePathParams;
    request: WebhooksSubscribeRequestBody;
    security: WebhooksSubscribeSecurity;
}
export declare class WebhooksSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
}
