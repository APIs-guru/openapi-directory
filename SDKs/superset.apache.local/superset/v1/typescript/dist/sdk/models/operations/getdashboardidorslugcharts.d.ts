import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardIdOrSlugChartsPathParams extends SpeakeasyBase {
    idOrSlug: string;
}
export declare class GetDashboardIdOrSlugChartsSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardIdOrSlugCharts200ApplicationJson extends SpeakeasyBase {
    result?: shared.ChartEntityResponseSchema[];
}
export declare class GetDashboardIdOrSlugCharts400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugCharts401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugCharts404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardIdOrSlugChartsRequest extends SpeakeasyBase {
    pathParams: GetDashboardIdOrSlugChartsPathParams;
    security: GetDashboardIdOrSlugChartsSecurity;
}
export declare class GetDashboardIdOrSlugChartsResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardIdOrSlugCharts200ApplicationJsonObject?: GetDashboardIdOrSlugCharts200ApplicationJson;
    getDashboardIdOrSlugCharts400ApplicationJsonObject?: GetDashboardIdOrSlugCharts400ApplicationJson;
    getDashboardIdOrSlugCharts401ApplicationJsonObject?: GetDashboardIdOrSlugCharts401ApplicationJson;
    getDashboardIdOrSlugCharts404ApplicationJsonObject?: GetDashboardIdOrSlugCharts404ApplicationJson;
    statusCode: number;
}
