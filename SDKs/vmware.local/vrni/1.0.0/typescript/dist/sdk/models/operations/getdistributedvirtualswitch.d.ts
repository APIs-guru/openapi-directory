import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistributedVirtualSwitchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistributedVirtualSwitchQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetDistributedVirtualSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDistributedVirtualSwitchRequest extends SpeakeasyBase {
    pathParams: GetDistributedVirtualSwitchPathParams;
    queryParams: GetDistributedVirtualSwitchQueryParams;
    security: GetDistributedVirtualSwitchSecurity;
}
export declare class GetDistributedVirtualSwitchResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    distributedVirtualSwitch?: shared.DistributedVirtualSwitch;
    statusCode: number;
}
