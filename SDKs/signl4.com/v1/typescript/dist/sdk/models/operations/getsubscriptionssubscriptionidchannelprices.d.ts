import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdChannelPricesPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdChannelPricesRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdChannelPricesPathParams;
}
export declare class GetSubscriptionsSubscriptionIdChannelPricesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    channelPriceInfo?: shared.ChannelPriceInfo;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
