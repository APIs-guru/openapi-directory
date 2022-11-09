import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTTOLLFREEVERIFICATION_SERVERS: string[];
export declare class ListTollfreeVerificationQueryParams extends SpeakeasyBase {
    pageSize?: number;
    status?: shared.TollfreeVerificationEnumStatusEnum;
    tollfreePhoneNumberSid?: string;
}
export declare class ListTollfreeVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListTollfreeVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListTollfreeVerificationQueryParams;
    security: ListTollfreeVerificationSecurity;
}
export declare class ListTollfreeVerificationListTollfreeVerificationResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListTollfreeVerificationListTollfreeVerificationResponse extends SpeakeasyBase {
    meta?: ListTollfreeVerificationListTollfreeVerificationResponseMeta;
    verifications?: shared.MessagingV1TollfreeVerification[];
}
export declare class ListTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    listTollfreeVerificationResponse?: ListTollfreeVerificationListTollfreeVerificationResponse;
    statusCode: number;
}
