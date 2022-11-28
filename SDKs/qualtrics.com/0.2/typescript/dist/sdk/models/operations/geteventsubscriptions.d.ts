import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventSubscriptionsPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetEventSubscriptionsRequest extends SpeakeasyBase {
    pathParams: GetEventSubscriptionsPathParams;
}
export declare class GetEventSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    eventSubscriptionsResponse?: shared.EventSubscriptionsResponse;
    statusCode: number;
}
