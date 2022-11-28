import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAnnotationServerList: readonly ["https://insights.twilio.com"];
export declare class FetchAnnotationPathParams extends SpeakeasyBase {
    callSid: string;
}
export declare class FetchAnnotationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAnnotationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAnnotationPathParams;
    security: FetchAnnotationSecurity;
}
export declare class FetchAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insightsV1CallAnnotation?: shared.InsightsV1CallAnnotation;
}
