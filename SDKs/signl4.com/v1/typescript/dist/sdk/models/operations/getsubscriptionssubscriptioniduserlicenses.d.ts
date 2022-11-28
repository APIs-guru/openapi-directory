import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdUserLicensesPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdUserLicensesRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdUserLicensesPathParams;
}
export declare class GetSubscriptionsSubscriptionIdUserLicensesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    userLicenseInfo?: shared.UserLicenseInfo;
}
