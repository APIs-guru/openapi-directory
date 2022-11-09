import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class ListSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class ListSipAuthCallsCredentialListMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipAuthCallsCredentialListMappingPathParams;
    queryParams: ListSipAuthCallsCredentialListMappingQueryParams;
    security: ListSipAuthCallsCredentialListMappingSecurity;
}
export declare class ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipAuthCallsCredentialListMappingResponse?: ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;
    statusCode: number;
}
