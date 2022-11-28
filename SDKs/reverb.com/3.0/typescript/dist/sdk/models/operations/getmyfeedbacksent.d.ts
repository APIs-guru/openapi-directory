import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFeedbackSentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFeedbackSentRequest extends SpeakeasyBase {
    security: GetMyFeedbackSentSecurity;
}
export declare class GetMyFeedbackSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
