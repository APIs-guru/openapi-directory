import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateCredentialPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class UpdateCredentialUpdateCredentialRequest extends SpeakeasyBase {
    apiKey?: string;
    certificate?: string;
    friendlyName?: string;
    privateKey?: string;
    sandbox?: boolean;
    secret?: string;
}
export declare class UpdateCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateCredentialPathParams;
    request?: UpdateCredentialUpdateCredentialRequest;
    security: UpdateCredentialSecurity;
}
export declare class UpdateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV1Credential?: shared.ChatV1Credential;
}
