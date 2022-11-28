import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domains {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDomain - Get a domain for the authenticated user by name
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * getDomains - Gets a list of domains registered for the authenticating user.
    **/
    getDomains(req: operations.GetDomainsRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainsResponse>;
}
