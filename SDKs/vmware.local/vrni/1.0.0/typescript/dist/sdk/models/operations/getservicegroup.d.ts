import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceGroupPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetServiceGroupQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetServiceGroupSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetServiceGroupRequest extends SpeakeasyBase {
    pathParams: GetServiceGroupPathParams;
    queryParams: GetServiceGroupQueryParams;
    security: GetServiceGroupSecurity;
}
export declare class GetServiceGroupResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
