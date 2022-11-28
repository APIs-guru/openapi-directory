import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SentimentQueryParams extends SpeakeasyBase {
    all?: boolean;
}
export declare class SentimentRequest extends SpeakeasyBase {
    queryParams: SentimentQueryParams;
    request?: shared.Post[];
}
export declare class SentimentResponse extends SpeakeasyBase {
    contentType: string;
    predictionResults?: shared.PostPredicted[];
    statusCode: number;
    validationErrors?: shared.ValidationErrors;
}
