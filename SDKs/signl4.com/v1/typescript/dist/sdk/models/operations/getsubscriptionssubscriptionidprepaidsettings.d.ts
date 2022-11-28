import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdPrepaidSettingsPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidSettingsRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdPrepaidSettingsPathParams;
}
export declare class GetSubscriptionsSubscriptionIdPrepaidSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    statusCode: number;
}
