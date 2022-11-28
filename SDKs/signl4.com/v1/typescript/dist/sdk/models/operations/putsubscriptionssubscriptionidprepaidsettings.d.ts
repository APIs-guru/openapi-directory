import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class PutSubscriptionsSubscriptionIdPrepaidSettingsRequests extends SpeakeasyBase {
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo1?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo2?: shared.PrepaidSettingsInfo;
    prepaidSettingsInfo3?: shared.PrepaidSettingsInfo;
}
export declare class PutSubscriptionsSubscriptionIdPrepaidSettingsRequest extends SpeakeasyBase {
    pathParams: PutSubscriptionsSubscriptionIdPrepaidSettingsPathParams;
    request?: PutSubscriptionsSubscriptionIdPrepaidSettingsRequests;
}
export declare class PutSubscriptionsSubscriptionIdPrepaidSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    prepaidSettingsInfo?: shared.PrepaidSettingsInfo;
    statusCode: number;
}
