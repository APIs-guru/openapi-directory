import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class ListSipDomainPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListSipDomainQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipDomainListSipDomainResponse extends SpeakeasyBase {
    domains?: shared.ApiV2010AccountSipSipDomain[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipDomainPathParams;
    queryParams: ListSipDomainQueryParams;
    security: ListSipDomainSecurity;
}
export declare class ListSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    listSipDomainResponse?: ListSipDomainListSipDomainResponse;
    statusCode: number;
}
