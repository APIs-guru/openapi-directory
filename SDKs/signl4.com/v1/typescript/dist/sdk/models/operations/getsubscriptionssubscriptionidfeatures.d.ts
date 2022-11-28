import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdFeaturesPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdFeaturesRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdFeaturesPathParams;
}
export declare class GetSubscriptionsSubscriptionIdFeaturesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    subscriptionFeatures?: shared.SubscriptionFeature[];
}
