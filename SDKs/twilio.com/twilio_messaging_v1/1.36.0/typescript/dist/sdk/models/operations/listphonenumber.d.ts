import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTPHONENUMBER_SERVERS: string[];
export declare class ListPhoneNumberPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class ListPhoneNumberQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListPhoneNumberPathParams;
    queryParams: ListPhoneNumberQueryParams;
    security: ListPhoneNumberSecurity;
}
export declare class ListPhoneNumberListPhoneNumberResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListPhoneNumberListPhoneNumberResponse extends SpeakeasyBase {
    meta?: ListPhoneNumberListPhoneNumberResponseMeta;
    phoneNumbers?: shared.MessagingV1ServicePhoneNumber[];
}
export declare class ListPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    listPhoneNumberResponse?: ListPhoneNumberListPhoneNumberResponse;
    statusCode: number;
}
