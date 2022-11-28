import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartDataCacheKeyPathParams extends SpeakeasyBase {
    cacheKey: string;
}
export declare class GetChartDataCacheKeySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartDataCacheKey400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartDataCacheKey401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartDataCacheKey404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartDataCacheKey422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartDataCacheKey500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartDataCacheKeyRequest extends SpeakeasyBase {
    pathParams: GetChartDataCacheKeyPathParams;
    security: GetChartDataCacheKeySecurity;
}
export declare class GetChartDataCacheKeyResponse extends SpeakeasyBase {
    chartDataResponseSchema?: shared.ChartDataResponseSchema;
    contentType: string;
    getChartDataCacheKey400ApplicationJsonObject?: GetChartDataCacheKey400ApplicationJson;
    getChartDataCacheKey401ApplicationJsonObject?: GetChartDataCacheKey401ApplicationJson;
    getChartDataCacheKey404ApplicationJsonObject?: GetChartDataCacheKey404ApplicationJson;
    getChartDataCacheKey422ApplicationJsonObject?: GetChartDataCacheKey422ApplicationJson;
    getChartDataCacheKey500ApplicationJsonObject?: GetChartDataCacheKey500ApplicationJson;
    statusCode: number;
}
