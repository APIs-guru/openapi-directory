import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTrainedModelMetrics1PathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainedModelMetrics1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModelMetrics1Request extends SpeakeasyBase {
    pathParams: GetTrainedModelMetrics1PathParams;
    security: GetTrainedModelMetrics1Security;
}
export declare class GetTrainedModelMetrics1Response extends SpeakeasyBase {
    contentType: string;
    metrics?: shared.Metrics;
    statusCode: number;
}
