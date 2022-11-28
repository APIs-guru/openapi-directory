import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/va_forms/{version}", "https://api.va.gov/services/va_forms/{version}"];
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
     * findFormByFormName - Find form by form name
     *
     * Returns a single form and the full revision history
    **/
    findFormByFormName(req: operations.FindFormByFormNameRequest, config?: AxiosRequestConfig): Promise<operations.FindFormByFormNameResponse>;
    /**
     * findForms - Returns all VA Forms and their last revision date
     *
     * Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
    **/
    findForms(req: operations.FindFormsRequest, config?: AxiosRequestConfig): Promise<operations.FindFormsResponse>;
}
export {};
