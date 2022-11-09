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
    FetchPhoneNumber(req: operations.FetchPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberResponse>;
    FetchSipDomain(req: operations.FetchSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipDomainResponse>;
    FetchTrunks(req: operations.FetchTrunksRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunksResponse>;
    UpdatePhoneNumber(req: operations.UpdatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    UpdateSipDomain(req: operations.UpdateSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipDomainResponse>;
    UpdateTrunks(req: operations.UpdateTrunksRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrunksResponse>;
}
export {};
