import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTokenServerList: readonly ["https://api.twilio.com"];
export declare class CreateTokenPathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class CreateTokenCreateTokenRequest extends SpeakeasyBase {
    ttl?: number;
}
export declare class CreateTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateTokenPathParams;
    request?: CreateTokenCreateTokenRequest;
    security: CreateTokenSecurity;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountToken?: shared.ApiV2010AccountToken;
}
