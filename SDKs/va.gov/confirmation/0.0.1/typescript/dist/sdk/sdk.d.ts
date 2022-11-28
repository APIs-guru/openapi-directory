import { AxiosInstance } from "axios";
import { VeteranConfirmationStatus } from "./veteranconfirmationstatus";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/veteran_confirmation/{version}", "https://api.va.gov/services/veteran_confirmation/{version}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    veteranConfirmationStatus: VeteranConfirmationStatus;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
