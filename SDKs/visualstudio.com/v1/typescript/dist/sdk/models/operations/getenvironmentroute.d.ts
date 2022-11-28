import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEnvironmentRoutePathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class GetEnvironmentRouteQueryParams extends SpeakeasyBase {
    connect?: boolean;
    pfConnect?: boolean;
}
export declare class GetEnvironmentRouteRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentRoutePathParams;
    queryParams: GetEnvironmentRouteQueryParams;
}
export declare class GetEnvironmentRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cloudEnvironmentResult?: shared.CloudEnvironmentResult;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
