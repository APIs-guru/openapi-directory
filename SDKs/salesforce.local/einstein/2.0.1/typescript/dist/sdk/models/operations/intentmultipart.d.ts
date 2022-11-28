import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntentMultipartRequests extends SpeakeasyBase {
    intentPredictRequest?: shared.IntentPredictRequest;
    intentPredictRequest1?: shared.IntentPredictRequest;
}
export declare class IntentMultipartSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class IntentMultipartRequest extends SpeakeasyBase {
    request?: IntentMultipartRequests;
    security: IntentMultipartSecurity;
}
export declare class IntentMultipartResponse extends SpeakeasyBase {
    contentType: string;
    intentPredictResponse?: shared.IntentPredictResponse;
    predictionErrorResponse?: shared.PredictionErrorResponse;
    statusCode: number;
}
