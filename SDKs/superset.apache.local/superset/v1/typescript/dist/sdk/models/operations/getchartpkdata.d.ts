import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartPkDataPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetChartPkDataQueryParams extends SpeakeasyBase {
    format?: string;
    type?: string;
}
export declare class GetChartPkDataSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartPkData400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkData401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkData500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartPkDataRequest extends SpeakeasyBase {
    pathParams: GetChartPkDataPathParams;
    queryParams: GetChartPkDataQueryParams;
    security: GetChartPkDataSecurity;
}
export declare class GetChartPkDataResponse extends SpeakeasyBase {
    chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;
    chartDataResponseSchema?: shared.ChartDataResponseSchema;
    contentType: string;
    getChartPkData400ApplicationJsonObject?: GetChartPkData400ApplicationJson;
    getChartPkData401ApplicationJsonObject?: GetChartPkData401ApplicationJson;
    getChartPkData500ApplicationJsonObject?: GetChartPkData500ApplicationJson;
    statusCode: number;
}
