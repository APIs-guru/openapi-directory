import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECALLFEEDBACKSUMMARY_SERVERS: string[];
export declare class CreateCallFeedbackSummaryPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare enum CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest extends SpeakeasyBase {
    endDate: Date;
    includeSubaccounts?: boolean;
    startDate: Date;
    statusCallback?: string;
    statusCallbackMethod?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
}
export declare class CreateCallFeedbackSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCallFeedbackSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateCallFeedbackSummaryPathParams;
    request?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;
    security: CreateCallFeedbackSummarySecurity;
}
export declare class CreateCallFeedbackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountCallCallFeedbackSummary?: shared.ApiV2010AccountCallCallFeedbackSummary;
}
