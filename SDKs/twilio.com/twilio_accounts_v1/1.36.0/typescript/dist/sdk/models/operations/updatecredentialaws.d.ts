import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECREDENTIALAWS_SERVERS: string[];
export declare class UpdateCredentialAwsPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateCredentialAwsUpdateCredentialAwsRequest extends SpeakeasyBase {
    friendlyName?: string;
}
export declare class UpdateCredentialAwsSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCredentialAwsRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCredentialAwsPathParams;
    request?: UpdateCredentialAwsUpdateCredentialAwsRequest;
    security: UpdateCredentialAwsSecurity;
}
export declare class UpdateCredentialAwsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1CredentialCredentialAws?: shared.AccountsV1CredentialCredentialAws;
}
