import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionsSubscriptionIdTeamsPathParams extends SpeakeasyBase {
    subscriptionId: string;
}
export declare class GetSubscriptionsSubscriptionIdTeamsRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionsSubscriptionIdTeamsPathParams;
}
export declare class GetSubscriptionsSubscriptionIdTeamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    teamInfos?: shared.TeamInfo[];
}
