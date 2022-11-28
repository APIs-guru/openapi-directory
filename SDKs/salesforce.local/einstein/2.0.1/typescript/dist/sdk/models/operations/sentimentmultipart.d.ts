import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SentimentMultipartRequests extends SpeakeasyBase {
    sentimentPredictRequest?: shared.SentimentPredictRequest;
    sentimentPredictRequest1?: shared.SentimentPredictRequest;
}
export declare class SentimentMultipartSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class SentimentMultipartRequest extends SpeakeasyBase {
    request?: SentimentMultipartRequests;
    security: SentimentMultipartSecurity;
}
export declare class SentimentMultipartResponse extends SpeakeasyBase {
    contentType: string;
    sentimentPredictResponse?: shared.SentimentPredictResponse;
    statusCode: number;
}
