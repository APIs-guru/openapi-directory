import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Returns a single form and the full revision history
    **/
    FindFormByFormName(req: operations.FindFormByFormNameRequest, config?: AxiosRequestConfig): Promise<operations.FindFormByFormNameResponse>;
    /**
     * Returns an index of all available VA forms. Optionally, pass a query parameter to filter forms by form number or title.
    **/
    FindForms(req: operations.FindFormsRequest, config?: AxiosRequestConfig): Promise<operations.FindFormsResponse>;
}
export {};
