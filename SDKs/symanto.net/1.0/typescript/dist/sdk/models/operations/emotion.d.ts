import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmotionQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class EmotionRequest extends SpeakeasyBase {
    queryParams: EmotionQueryParams;
    request?: shared.Post[];
}
export declare class EmotionResponse extends SpeakeasyBase {
    contentType: string;
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
