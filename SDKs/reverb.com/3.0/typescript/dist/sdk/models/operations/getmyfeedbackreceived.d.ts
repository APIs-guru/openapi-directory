import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFeedbackReceivedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFeedbackReceivedRequest extends SpeakeasyBase {
    security: GetMyFeedbackReceivedSecurity;
}
export declare class GetMyFeedbackReceivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
