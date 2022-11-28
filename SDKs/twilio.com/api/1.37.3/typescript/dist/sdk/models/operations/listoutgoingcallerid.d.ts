import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class ListOutgoingCallerIdPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListOutgoingCallerIdQueryParams extends SpeakeasyBase {
    friendlyName?: string;
    pageSize?: number;
    phoneNumber?: string;
}
export declare class ListOutgoingCallerIdSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListOutgoingCallerIdListOutgoingCallerIdResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    outgoingCallerIds?: shared.ApiV2010AccountOutgoingCallerId[];
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListOutgoingCallerIdRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListOutgoingCallerIdPathParams;
    queryParams: ListOutgoingCallerIdQueryParams;
    security: ListOutgoingCallerIdSecurity;
}
export declare class ListOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    listOutgoingCallerIdResponse?: ListOutgoingCallerIdListOutgoingCallerIdResponse;
    statusCode: number;
}
