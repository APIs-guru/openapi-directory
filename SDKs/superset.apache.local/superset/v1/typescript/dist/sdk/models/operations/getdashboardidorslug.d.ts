import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardIdOrSlugPathParams extends SpeakeasyBase {
    idOrSlug: string;
}
export declare class GetDashboardIdOrSlugSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardIdOrSlug200ApplicationJson extends SpeakeasyBase {
    result?: shared.DashboardGetResponseSchema;
}
export declare class GetDashboardIdOrSlug400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlug401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlug404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugRequest extends SpeakeasyBase {
    pathParams: GetDashboardIdOrSlugPathParams;
    security: GetDashboardIdOrSlugSecurity;
}
export declare class GetDashboardIdOrSlugResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardIdOrSlug200ApplicationJsonObject?: GetDashboardIdOrSlug200ApplicationJson;
    getDashboardIdOrSlug400ApplicationJsonObject?: GetDashboardIdOrSlug400ApplicationJson;
    getDashboardIdOrSlug401ApplicationJsonObject?: GetDashboardIdOrSlug401ApplicationJson;
    getDashboardIdOrSlug404ApplicationJsonObject?: GetDashboardIdOrSlug404ApplicationJson;
    statusCode: number;
}
