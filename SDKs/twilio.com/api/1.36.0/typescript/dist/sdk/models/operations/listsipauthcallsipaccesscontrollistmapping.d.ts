import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
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
export declare class ListSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipAuthCallsIpAccessControlListMappingPathParams;
    queryParams: ListSipAuthCallsIpAccessControlListMappingQueryParams;
    security: ListSipAuthCallsIpAccessControlListMappingSecurity;
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
export declare class ListSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipAuthCallsIpAccessControlListMappingResponse?: ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse;
    statusCode: number;
}
