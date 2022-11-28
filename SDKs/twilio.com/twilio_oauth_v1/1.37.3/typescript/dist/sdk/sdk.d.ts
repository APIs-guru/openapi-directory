import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://oauth.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createToken - Issues a new Access token (optionally identity_token & refresh_token) in exchange of Oauth grant
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * fetchCerts - Fetches public JWKs
    **/
    fetchCerts(req: operations.FetchCertsRequest, config?: AxiosRequestConfig): Promise<operations.FetchCertsResponse>;
    /**
     * fetchOpenidDiscovery - Fetch configuration details about the OpenID Connect Authorization Server
    **/
    fetchOpenidDiscovery(req: operations.FetchOpenidDiscoveryRequest, config?: AxiosRequestConfig): Promise<operations.FetchOpenidDiscoveryResponse>;
    /**
     * fetchUserInfo - Retrieves the consented UserInfo and other claims about the logged-in subject (end-user).
    **/
    fetchUserInfo(req: operations.FetchUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserInfoResponse>;
}
export {};
