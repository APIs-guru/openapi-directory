import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class ListSipCredentialListPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListSipCredentialListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipCredentialListListSipCredentialListResponse extends SpeakeasyBase {
    credentialLists?: shared.ApiV2010AccountSipSipCredentialList[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipCredentialListPathParams;
    queryParams: ListSipCredentialListQueryParams;
    security: ListSipCredentialListSecurity;
}
export declare class ListSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    listSipCredentialListResponse?: ListSipCredentialListListSipCredentialListResponse;
    statusCode: number;
}
