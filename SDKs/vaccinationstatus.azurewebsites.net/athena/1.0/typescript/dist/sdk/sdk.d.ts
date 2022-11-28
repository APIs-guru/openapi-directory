import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://vaccinationstatus.azurewebsites.net//vaccinationstatus.azurewebsites.net/covid-vaccine-status/v1.0.0/usa/api"];
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
     * getVaccineStatus - return vaccine status from USA -- Athena Health API
    **/
    getVaccineStatus(req: operations.GetVaccineStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetVaccineStatusResponse>;
}
export {};
