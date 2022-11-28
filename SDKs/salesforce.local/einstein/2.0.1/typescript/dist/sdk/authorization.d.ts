import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Authorization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * generateTokenV2 - Generate an OAuth Token
     *
     * Returns an OAuth access token or a refresh token. You must pass a valid access token in the header of each API call.
     *
     * https://metamind.readme.io/docs/generate-an-oauth-access-token - authentication guid
    **/
    generateTokenV2(req: operations.GenerateTokenV2Request, config?: AxiosRequestConfig): Promise<operations.GenerateTokenV2Response>;
    /**
     * revokeRefreshTokenV2 - Delete a Refresh Token
    **/
    revokeRefreshTokenV2(req: operations.RevokeRefreshTokenV2Request, config?: AxiosRequestConfig): Promise<operations.RevokeRefreshTokenV2Response>;
}
