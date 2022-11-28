import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class ListSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class ListSipIpAccessControlListMappingQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    ipAccessControlListMappings?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipIpAccessControlListMappingPathParams;
    queryParams: ListSipIpAccessControlListMappingQueryParams;
    security: ListSipIpAccessControlListMappingSecurity;
}
export declare class ListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    listSipIpAccessControlListMappingResponse?: ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse;
    statusCode: number;
}
