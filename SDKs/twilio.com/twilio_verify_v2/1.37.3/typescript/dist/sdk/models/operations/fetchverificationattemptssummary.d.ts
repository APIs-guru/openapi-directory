import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchVerificationAttemptsSummaryServerList: readonly ["https://verify.twilio.com"];
export declare class FetchVerificationAttemptsSummaryQueryParams extends SpeakeasyBase {
    channel?: shared.VerificationAttemptsSummaryEnumChannelsEnum;
    country?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    destinationPrefix?: string;
    verifyServiceSid?: string;
}
export declare class FetchVerificationAttemptsSummarySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchVerificationAttemptsSummaryRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: FetchVerificationAttemptsSummaryQueryParams;
    security: FetchVerificationAttemptsSummarySecurity;
}
export declare class FetchVerificationAttemptsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2VerificationAttemptsSummary?: shared.VerifyV2VerificationAttemptsSummary;
}
