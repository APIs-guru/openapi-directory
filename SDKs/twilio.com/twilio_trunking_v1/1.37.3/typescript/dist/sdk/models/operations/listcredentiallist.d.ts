import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCredentialListServerList: readonly ["https://trunking.twilio.com"];
export declare class ListCredentialListPathParams extends SpeakeasyBase {
    trunkSid: string;
}
export declare class ListCredentialListQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCredentialListListCredentialListResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCredentialListListCredentialListResponse extends SpeakeasyBase {
    credentialLists?: shared.TrunkingV1TrunkCredentialList[];
    meta?: ListCredentialListListCredentialListResponseMeta;
}
export declare class ListCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListCredentialListPathParams;
    queryParams: ListCredentialListQueryParams;
    security: ListCredentialListSecurity;
}
export declare class ListCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    listCredentialListResponse?: ListCredentialListListCredentialListResponse;
    statusCode: number;
}
