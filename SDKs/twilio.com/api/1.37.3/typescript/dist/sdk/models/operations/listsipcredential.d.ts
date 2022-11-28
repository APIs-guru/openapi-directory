import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class ListSipCredentialPathParams extends SpeakeasyBase {
    accountSid: string;
    credentialListSid: string;
}
export declare class ListSipCredentialQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSipCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSipCredentialListSipCredentialResponse extends SpeakeasyBase {
    credentials?: shared.ApiV2010AccountSipSipCredentialListSipCredential[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListSipCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSipCredentialPathParams;
    queryParams: ListSipCredentialQueryParams;
    security: ListSipCredentialSecurity;
}
export declare class ListSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    listSipCredentialResponse?: ListSipCredentialListSipCredentialResponse;
    statusCode: number;
}
