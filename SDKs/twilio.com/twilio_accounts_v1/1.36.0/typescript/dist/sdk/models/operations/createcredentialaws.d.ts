import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATECREDENTIALAWS_SERVERS: string[];
export declare class CreateCredentialAwsCreateCredentialAwsRequest extends SpeakeasyBase {
    accountSid?: string;
    credentials: string;
    friendlyName?: string;
}
export declare class CreateCredentialAwsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCredentialAwsRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCredentialAwsCreateCredentialAwsRequest;
    security: CreateCredentialAwsSecurity;
}
export declare class CreateCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
