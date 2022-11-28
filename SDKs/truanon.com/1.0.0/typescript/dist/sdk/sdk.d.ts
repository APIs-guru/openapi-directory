import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://staging.truanon.com"];
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
     * getProfile - Get Profile
     *
     * get_profile Private API: Request confirmed profile data for your unique member ID
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getToken - Get Token
     *
     * request_token Private API: Request a Proof token to let the member confirm in a popup interface
     *
     *         {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}
     *
     * Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
     *
     *         https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio
    **/
    getToken(req: operations.GetTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetTokenResponse>;
}
export {};
