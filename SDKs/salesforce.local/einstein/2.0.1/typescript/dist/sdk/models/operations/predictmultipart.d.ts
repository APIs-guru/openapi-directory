import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PredictMultipartRequests extends SpeakeasyBase {
    imageClassificationRequest?: shared.ImageClassificationRequest;
    imageClassificationRequest1?: shared.ImageClassificationRequest;
}
export declare class PredictMultipartSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class PredictMultipartRequest extends SpeakeasyBase {
    request?: PredictMultipartRequests;
    security: PredictMultipartSecurity;
}
export declare class PredictMultipartResponse extends SpeakeasyBase {
    contentType: string;
    imageClassificationResponse?: shared.ImageClassificationResponse;
    statusCode: number;
}
