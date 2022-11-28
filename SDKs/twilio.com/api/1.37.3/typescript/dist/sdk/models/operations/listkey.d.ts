import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListKeyServerList: readonly ["https://api.twilio.com"];
export declare class ListKeyPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class ListKeyQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListKeySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListKeyListKeyResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    keys?: shared.ApiV2010AccountKey[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListKeyRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListKeyPathParams;
    queryParams: ListKeyQueryParams;
    security: ListKeySecurity;
}
export declare class ListKeyResponse extends SpeakeasyBase {
    contentType: string;
    listKeyResponse?: ListKeyListKeyResponse;
    statusCode: number;
}
