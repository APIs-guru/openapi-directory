import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSecurityGroupPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSecurityGroupQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetSecurityGroupSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetSecurityGroupRequest extends SpeakeasyBase {
    pathParams: GetSecurityGroupPathParams;
    queryParams: GetSecurityGroupQueryParams;
    security: GetSecurityGroupSecurity;
}
export declare class GetSecurityGroupResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    baseSecurityGroup?: shared.BaseSecurityGroup;
    contentType: string;
    statusCode: number;
}
