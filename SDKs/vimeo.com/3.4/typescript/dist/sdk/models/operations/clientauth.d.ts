import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ClientAuthRequestBodyGrantTypeEnum {
    ClientCredentials = "client_credentials"
}
export declare class ClientAuthRequestBody extends SpeakeasyBase {
    grantType: ClientAuthRequestBodyGrantTypeEnum;
    scope: string;
}
export declare class ClientAuthRequest extends SpeakeasyBase {
    request: ClientAuthRequestBody;
}
export declare class ClientAuthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    auth?: shared.Auth;
    error?: shared.Error;
}
