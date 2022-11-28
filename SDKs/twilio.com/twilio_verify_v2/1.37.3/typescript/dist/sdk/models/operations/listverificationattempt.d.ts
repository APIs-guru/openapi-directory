import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListVerificationAttemptServerList: readonly ["https://verify.twilio.com"];
export declare class ListVerificationAttemptQueryParams extends SpeakeasyBase {
    channel?: shared.VerificationAttemptEnumChannelsEnum;
    channelDataTo?: string;
    country?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    pageSize?: number;
    status?: shared.VerificationAttemptEnumConversionStatusEnum;
    verificationSid?: string;
    verifyServiceSid?: string;
}
export declare class ListVerificationAttemptSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListVerificationAttemptListVerificationAttemptResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListVerificationAttemptListVerificationAttemptResponse extends SpeakeasyBase {
    attempts?: shared.VerifyV2VerificationAttempt[];
    meta?: ListVerificationAttemptListVerificationAttemptResponseMeta;
}
export declare class ListVerificationAttemptRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListVerificationAttemptQueryParams;
    security: ListVerificationAttemptSecurity;
}
export declare class ListVerificationAttemptResponse extends SpeakeasyBase {
    contentType: string;
    listVerificationAttemptResponse?: ListVerificationAttemptListVerificationAttemptResponse;
    statusCode: number;
}
