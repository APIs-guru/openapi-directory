import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AuthenticationExtrasEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * clientAuth - Authorize a client with OAuth
     *
     * For information on utilizing OAuth client authorization, see our
     * [authentication](/api/authentication#generate-unauthenticated-tokens) documentation or the
     * [Client Credentials Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.4) section of the
     * [OAuth spec](https://tools.ietf.org/html/draft-ietf-oauth-v2-31.
    **/
    clientAuth(req: operations.ClientAuthRequest, config?: AxiosRequestConfig): Promise<operations.ClientAuthResponse>;
    /**
     * convertAccessToken - Convert OAuth 1 access tokens to OAuth 2 access tokens
    **/
    convertAccessToken(req: operations.ConvertAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.ConvertAccessTokenResponse>;
    /**
     * deleteToken - Revoke the current access token
     *
     * This method enables an app to notify the API that it is done with a token and that the token can be discarded.
    **/
    deleteToken(config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * exchangeAuthCode - Exchange an authorization code for an access token
    **/
    exchangeAuthCode(req: operations.ExchangeAuthCodeRequest, config?: AxiosRequestConfig): Promise<operations.ExchangeAuthCodeResponse>;
    /**
     * verifyToken - Verify an OAuth 2 token
    **/
    verifyToken(config?: AxiosRequestConfig): Promise<operations.VerifyTokenResponse>;
}
