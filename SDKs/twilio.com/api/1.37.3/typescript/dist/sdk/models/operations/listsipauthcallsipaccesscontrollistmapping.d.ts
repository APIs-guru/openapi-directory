import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipAuthCallsIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class ListSipAuthCallsIpAccessControlListMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipAuthCallsIpAccessControlListMappingPathParams;
    queryParams: ListSipAuthCallsIpAccessControlListMappingQueryParams;
    security: ListSipAuthCallsIpAccessControlListMappingSecurity;
}
export declare class ListSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipAuthCallsIpAccessControlListMappingResponse?: ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse;
    statusCode: number;
}
