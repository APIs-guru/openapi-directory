import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberMobileServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberMobilePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListIncomingPhoneNumberMobileQueryParams extends SpeakeasyBase {
    beta?: boolean;
    friendlyName?: string;
    origin?: string;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ListIncomingPhoneNumberMobileSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberMobilePathParams;
    queryParams: ListIncomingPhoneNumberMobileQueryParams;
    security: ListIncomingPhoneNumberMobileSecurity;
}
export declare class ListIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberMobileResponse?: ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse;
    statusCode: number;
}
