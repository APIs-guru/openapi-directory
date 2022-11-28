import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClusterPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetClusterQueryParams extends SpeakeasyBase {
    time?: number;
}
export declare class GetClusterSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class GetClusterRequest extends SpeakeasyBase {
    pathParams: GetClusterPathParams;
    queryParams: GetClusterQueryParams;
    security: GetClusterSecurity;
}
export declare class GetClusterResponse extends SpeakeasyBase {
    apiError?: shared.ApiError;
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
