import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartPkCacheScreenshotPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetChartPkCacheScreenshotQueryParams extends SpeakeasyBase {
    q?: shared.ScreenshotQuerySchema;
}
export declare class GetChartPkCacheScreenshotSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartPkCacheScreenshot400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkCacheScreenshot401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkCacheScreenshot404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkCacheScreenshot500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkCacheScreenshotRequest extends SpeakeasyBase {
    pathParams: GetChartPkCacheScreenshotPathParams;
    queryParams: GetChartPkCacheScreenshotQueryParams;
    security: GetChartPkCacheScreenshotSecurity;
}
export declare class GetChartPkCacheScreenshotResponse extends SpeakeasyBase {
    chartCacheScreenshotResponseSchema?: shared.ChartCacheScreenshotResponseSchema;
    contentType: string;
    getChartPkCacheScreenshot400ApplicationJsonObject?: GetChartPkCacheScreenshot400ApplicationJson;
    getChartPkCacheScreenshot401ApplicationJsonObject?: GetChartPkCacheScreenshot401ApplicationJson;
    getChartPkCacheScreenshot404ApplicationJsonObject?: GetChartPkCacheScreenshot404ApplicationJson;
    getChartPkCacheScreenshot500ApplicationJsonObject?: GetChartPkCacheScreenshot500ApplicationJson;
    statusCode: number;
}
