import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainedModelLearningCurve1PathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainedModelLearningCurve1QueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
}
export declare class GetTrainedModelLearningCurve1Security extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModelLearningCurve1Request extends SpeakeasyBase {
    pathParams: GetTrainedModelLearningCurve1PathParams;
    queryParams: GetTrainedModelLearningCurve1QueryParams;
    security: GetTrainedModelLearningCurve1Security;
}
export declare class GetTrainedModelLearningCurve1Response extends SpeakeasyBase {
    contentType: string;
    learningCurveList?: shared.LearningCurveList;
    statusCode: number;
}
