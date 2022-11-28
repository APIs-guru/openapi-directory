import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * playByPlay - Play By Play
    **/
    playByPlay(req: operations.PlayByPlayRequest, config?: AxiosRequestConfig): Promise<operations.PlayByPlayResponse>;
    /**
     * playByPlayDelta - Play By Play Delta
    **/
    playByPlayDelta(req: operations.PlayByPlayDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayByPlayDeltaResponse>;
}
export {};
