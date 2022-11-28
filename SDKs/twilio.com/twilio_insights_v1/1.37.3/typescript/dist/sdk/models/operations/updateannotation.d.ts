import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateAnnotationServerList: readonly ["https://insights.twilio.com"];
export declare class UpdateAnnotationPathParams extends SpeakeasyBase {
    callSid: string;
}
export declare class UpdateAnnotationUpdateAnnotationRequest extends SpeakeasyBase {
    answeredBy?: shared.AnnotationEnumAnsweredByEnum;
    callScore?: number;
    comment?: string;
    connectivityIssue?: shared.AnnotationEnumConnectivityIssueEnum;
    incident?: string;
    qualityIssues?: string;
    spam?: boolean;
}
export declare class UpdateAnnotationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAnnotationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateAnnotationPathParams;
    request?: UpdateAnnotationUpdateAnnotationRequest;
    security: UpdateAnnotationSecurity;
}
export declare class UpdateAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
