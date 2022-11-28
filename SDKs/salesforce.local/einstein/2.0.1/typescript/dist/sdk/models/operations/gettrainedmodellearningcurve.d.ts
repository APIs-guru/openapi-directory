import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrainedModelLearningCurvePathParams extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainedModelLearningCurveQueryParams extends SpeakeasyBase {
    count?: string;
    offset?: string;
}
export declare class GetTrainedModelLearningCurveSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class GetTrainedModelLearningCurveRequest extends SpeakeasyBase {
    pathParams: GetTrainedModelLearningCurvePathParams;
    queryParams: GetTrainedModelLearningCurveQueryParams;
    security: GetTrainedModelLearningCurveSecurity;
}
export declare class GetTrainedModelLearningCurveResponse extends SpeakeasyBase {
    contentType: string;
    learningCurveList?: shared.LearningCurveList;
    statusCode: number;
}
