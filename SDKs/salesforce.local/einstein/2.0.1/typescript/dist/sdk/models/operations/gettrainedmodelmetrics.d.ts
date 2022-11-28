import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainedModelMetricsPathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainedModelMetricsSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModelMetricsRequest extends SpeakeasyBase {
    pathParams: GetTrainedModelMetricsPathParams;
    security: GetTrainedModelMetricsSecurity;
}
export declare class GetTrainedModelMetricsResponse extends SpeakeasyBase {
    contentType: string;
    metrics?: shared.Metrics;
    statusCode: number;
}
