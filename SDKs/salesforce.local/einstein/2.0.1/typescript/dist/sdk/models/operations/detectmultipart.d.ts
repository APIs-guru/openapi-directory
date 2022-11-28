import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DetectMultipartRequests extends SpeakeasyBase {
    objectDetectionRequest?: shared.ObjectDetectionRequest;
    objectDetectionRequest1?: shared.ObjectDetectionRequest;
}
export declare class DetectMultipartSecurity extends SpeakeasyBase {
    bearerToken: shared.SchemeBearerToken;
}
export declare class DetectMultipartRequest extends SpeakeasyBase {
    request?: DetectMultipartRequests;
    security: DetectMultipartSecurity;
}
export declare class DetectMultipartResponse extends SpeakeasyBase {
    contentType: string;
    objectDetectionResponse?: shared.ObjectDetectionResponse;
    statusCode: number;
}
