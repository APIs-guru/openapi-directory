import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartFavoriteStatusQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class GetChartFavoriteStatusSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartFavoriteStatus400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartFavoriteStatus401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartFavoriteStatus404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartFavoriteStatus500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartFavoriteStatusRequest extends SpeakeasyBase {
    queryParams: GetChartFavoriteStatusQueryParams;
    security: GetChartFavoriteStatusSecurity;
}
export declare class GetChartFavoriteStatusResponse extends SpeakeasyBase {
    contentType: string;
    getChartFavoriteStatus400ApplicationJsonObject?: GetChartFavoriteStatus400ApplicationJson;
    getChartFavoriteStatus401ApplicationJsonObject?: GetChartFavoriteStatus401ApplicationJson;
    getChartFavoriteStatus404ApplicationJsonObject?: GetChartFavoriteStatus404ApplicationJson;
    getChartFavoriteStatus500ApplicationJsonObject?: GetChartFavoriteStatus500ApplicationJson;
    getFavStarIdsSchema?: shared.GetFavStarIdsSchema;
    statusCode: number;
}
