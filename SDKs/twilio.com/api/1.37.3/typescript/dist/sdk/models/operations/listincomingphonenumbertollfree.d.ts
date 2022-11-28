import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberTollFreeServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberTollFreePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListIncomingPhoneNumberTollFreeQueryParams extends SpeakeasyBase {
    beta?: boolean;
    friendlyName?: string;
    origin?: string;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ListIncomingPhoneNumberTollFreeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberTollFreeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberTollFreePathParams;
    queryParams: ListIncomingPhoneNumberTollFreeQueryParams;
    security: ListIncomingPhoneNumberTollFreeSecurity;
}
export declare class ListIncomingPhoneNumberTollFreeResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberTollFreeResponse?: ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse;
    statusCode: number;
}
