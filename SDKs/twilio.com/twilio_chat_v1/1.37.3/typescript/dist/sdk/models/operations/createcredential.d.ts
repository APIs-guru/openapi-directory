import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class CreateCredentialCreateCredentialRequest extends SpeakeasyBase {
    apiKey?: string;
    certificate?: string;
    friendlyName?: string;
    privateKey?: string;
    sandbox?: boolean;
    secret?: string;
    type: shared.CredentialEnumPushServiceEnum;
}
export declare class CreateCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateCredentialCreateCredentialRequest;
    security: CreateCredentialSecurity;
}
export declare class CreateCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV1Credential?: shared.ChatV1Credential;
}
