import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostChartDataSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostChartData400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartData401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartData500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostChartDataRequest extends SpeakeasyBase {
    request: shared.ChartDataQueryContextSchema;
    security: PostChartDataSecurity;
}
export declare class PostChartDataResponse extends SpeakeasyBase {
    chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;
    chartDataResponseSchema?: shared.ChartDataResponseSchema;
    contentType: string;
    postChartData400ApplicationJsonObject?: PostChartData400ApplicationJson;
    postChartData401ApplicationJsonObject?: PostChartData401ApplicationJson;
    postChartData500ApplicationJsonObject?: PostChartData500ApplicationJson;
    statusCode: number;
}
