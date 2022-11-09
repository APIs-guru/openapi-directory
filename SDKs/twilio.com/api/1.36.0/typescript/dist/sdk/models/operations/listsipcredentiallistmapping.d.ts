import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTSIPCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class ListSipCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class ListSipCredentialListMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipCredentialListMappingPathParams;
    queryParams: ListSipCredentialListMappingQueryParams;
    security: ListSipCredentialListMappingSecurity;
}
export declare class ListSipCredentialListMappingListSipCredentialListMappingResponse extends SpeakeasyBase {
    credentialListMappings?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipCredentialListMappingResponse?: ListSipCredentialListMappingListSipCredentialListMappingResponse;
    statusCode: number;
}
