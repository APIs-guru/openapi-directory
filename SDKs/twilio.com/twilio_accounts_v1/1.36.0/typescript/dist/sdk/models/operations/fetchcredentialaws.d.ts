import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCREDENTIALAWS_SERVERS: string[];
export declare class FetchCredentialAwsPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCredentialAwsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCredentialAwsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCredentialAwsPathParams;
    security: FetchCredentialAwsSecurity;
}
export declare class FetchCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
