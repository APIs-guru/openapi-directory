import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEACCESSTOKEN_SERVERS: string[];
export declare class CreateAccessTokenPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateAccessTokenCreateAccessTokenRequest extends SpeakeasyBase {
    factorFriendlyName?: string;
    factorType: shared.AccessTokenEnumFactorTypesEnum;
    identity: string;
    ttl?: number;
}
export declare class CreateAccessTokenSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateAccessTokenRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateAccessTokenPathParams;
    request?: CreateAccessTokenCreateAccessTokenRequest;
    security: CreateAccessTokenSecurity;
}
export declare class CreateAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2ServiceAccessToken?: shared.VerifyV2ServiceAccessToken;
}
