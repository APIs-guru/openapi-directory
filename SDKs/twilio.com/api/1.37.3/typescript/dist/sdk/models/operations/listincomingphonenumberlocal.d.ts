import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListIncomingPhoneNumberLocalServerList: readonly ["https://api.twilio.com"];
export declare class ListIncomingPhoneNumberLocalPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListIncomingPhoneNumberLocalQueryParams extends SpeakeasyBase {
    beta?: boolean;
    friendlyName?: string;
    origin?: string;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ListIncomingPhoneNumberLocalSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    incomingPhoneNumbers?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListIncomingPhoneNumberLocalRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListIncomingPhoneNumberLocalPathParams;
    queryParams: ListIncomingPhoneNumberLocalQueryParams;
    security: ListIncomingPhoneNumberLocalSecurity;
}
export declare class ListIncomingPhoneNumberLocalResponse extends SpeakeasyBase {
    contentType: string;
    listIncomingPhoneNumberLocalResponse?: ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse;
    statusCode: number;
}
