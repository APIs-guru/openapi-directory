import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardFavoriteStatusQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetDashboardFavoriteStatusSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardFavoriteStatus400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardFavoriteStatus401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardFavoriteStatus404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardFavoriteStatus500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardFavoriteStatusRequest extends SpeakeasyBase {
    queryParams: GetDashboardFavoriteStatusQueryParams;
    security: GetDashboardFavoriteStatusSecurity;
}
export declare class GetDashboardFavoriteStatusResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardFavoriteStatus400ApplicationJsonObject?: GetDashboardFavoriteStatus400ApplicationJson;
    getDashboardFavoriteStatus401ApplicationJsonObject?: GetDashboardFavoriteStatus401ApplicationJson;
    getDashboardFavoriteStatus404ApplicationJsonObject?: GetDashboardFavoriteStatus404ApplicationJson;
    getDashboardFavoriteStatus500ApplicationJsonObject?: GetDashboardFavoriteStatus500ApplicationJson;
    getFavStarIdsSchema?: shared.GetFavStarIdsSchema;
    statusCode: number;
}
