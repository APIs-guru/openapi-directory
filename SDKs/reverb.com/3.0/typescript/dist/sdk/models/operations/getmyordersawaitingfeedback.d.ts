import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyOrdersAwaitingFeedbackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyOrdersAwaitingFeedbackRequest extends SpeakeasyBase {
    security: GetMyOrdersAwaitingFeedbackSecurity;
}
export declare class GetMyOrdersAwaitingFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
