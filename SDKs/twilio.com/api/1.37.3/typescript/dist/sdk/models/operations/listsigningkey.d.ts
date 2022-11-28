import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class ListSigningKeyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListSigningKeyQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListSigningKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListSigningKeyListSigningKeyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    signingKeys?: shared.ApiV2010AccountSigningKey[];
    start?: number;
    uri?: string;
}
export declare class ListSigningKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListSigningKeyPathParams;
    queryParams: ListSigningKeyQueryParams;
    security: ListSigningKeySecurity;
}
export declare class ListSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    listSigningKeyResponse?: ListSigningKeyListSigningKeyResponse;
    statusCode: number;
}
