import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteCallFeedbackSummaryServerList: readonly ["https://api.twilio.com"];
export declare class DeleteCallFeedbackSummaryPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteCallFeedbackSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteCallFeedbackSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteCallFeedbackSummaryPathParams;
    security: DeleteCallFeedbackSummarySecurity;
}
export declare class DeleteCallFeedbackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
