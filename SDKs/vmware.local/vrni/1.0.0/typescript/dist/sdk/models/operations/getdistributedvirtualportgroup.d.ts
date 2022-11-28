import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistributedVirtualPortgroupPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistributedVirtualPortgroupQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetDistributedVirtualPortgroupSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetDistributedVirtualPortgroupRequest extends SpeakeasyBase {
    pathParams: GetDistributedVirtualPortgroupPathParams;
    queryParams: GetDistributedVirtualPortgroupQueryParams;
    security: GetDistributedVirtualPortgroupSecurity;
}
export declare class GetDistributedVirtualPortgroupResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    distributedVirtualPortgroup?: shared.DistributedVirtualPortgroup;
    statusCode: number;
}
