import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams extends SpeakeasyBase {
    resourceGroupName: string;
    resourceName: string;
    subscriptionId: string;
}
export declare class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameRequest extends SpeakeasyBase {
    pathParams: GetApiV1PlansSubscriptionIdResourceGroupNameResourceNamePathParams;
}
export declare class GetApiV1PlansSubscriptionIdResourceGroupNameResourceNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    planResult?: shared.PlanResult;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
