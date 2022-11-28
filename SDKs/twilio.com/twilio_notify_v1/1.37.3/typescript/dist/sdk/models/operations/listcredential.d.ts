import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCredentialServerList: readonly ["https://notify.twilio.com"];
export declare class ListCredentialQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCredentialListCredentialResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCredentialListCredentialResponse extends SpeakeasyBase {
    credentials?: shared.NotifyV1Credential[];
    meta?: ListCredentialListCredentialResponseMeta;
}
export declare class ListCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCredentialQueryParams;
    security: ListCredentialSecurity;
}
export declare class ListCredentialResponse extends SpeakeasyBase {
    contentType: string;
    listCredentialResponse?: ListCredentialListCredentialResponse;
    statusCode: number;
}
