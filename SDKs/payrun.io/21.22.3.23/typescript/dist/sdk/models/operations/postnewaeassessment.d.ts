import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostNewAeAssessmentPathParams extends SpeakeasyBase {
    employeeId: string;
    employerId: string;
}
export declare class PostNewAeAssessmentHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostNewAeAssessmentRequest extends SpeakeasyBase {
    pathParams: PostNewAeAssessmentPathParams;
    headers: PostNewAeAssessmentHeaders;
    request: shared.AeAssessment;
}
export declare class PostNewAeAssessmentResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
