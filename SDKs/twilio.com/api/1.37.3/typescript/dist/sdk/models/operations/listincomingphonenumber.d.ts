import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListIncomingPhoneNumberQueryParams extends SpeakeasyBase {
    beta?: boolean;
    friendlyName?: string;
    origin?: string;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ListIncomingPhoneNumberSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberListIncomingPhoneNumberResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumber[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberPathParams;
    queryParams: ListIncomingPhoneNumberQueryParams;
    security: ListIncomingPhoneNumberSecurity;
}
export declare class ListIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberResponse?: ListIncomingPhoneNumberListIncomingPhoneNumberResponse;
    statusCode: number;
}
