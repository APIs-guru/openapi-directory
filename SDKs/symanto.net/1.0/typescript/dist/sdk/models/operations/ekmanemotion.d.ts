import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EkmanEmotionQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class EkmanEmotionRequest extends SpeakeasyBase {
    queryParams: EkmanEmotionQueryParams;
    request?: shared.Post[];
}
export declare class EkmanEmotionResponse extends SpeakeasyBase {
    contentType: string;
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
