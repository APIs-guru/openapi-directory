import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ListCredentialAwsServerList: readonly ["https://accounts.twilio.com"];
export declare class ListCredentialAwsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListCredentialAwsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListCredentialAwsListCredentialAwsResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListCredentialAwsListCredentialAwsResponse extends SpeakeasyBase {
    credentials?: shared.AccountsV1CredentialCredentialAws[];
    meta?: ListCredentialAwsListCredentialAwsResponseMeta;
}
export declare class ListCredentialAwsRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListCredentialAwsQueryParams;
    security: ListCredentialAwsSecurity;
}
export declare class ListCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    listCredentialAwsResponse?: ListCredentialAwsListCredentialAwsResponse;
    statusCode: number;
}
