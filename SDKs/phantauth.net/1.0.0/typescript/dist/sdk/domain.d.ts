import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Domain {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDomainDomainname - Get a Domain
     *
     * This endpoint allows you to get the data of a given PhantAuth domain. To use the PhantAuth services, you don't need this endpoint.
     * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
     *
     * Domainname is the fully qualified DNS name of the domain you get (e.g. *phantauth.net* or *phantauth.cf*).
    **/
    getDomainDomainname(req: operations.GetDomainDomainnameRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDomainnameResponse>;
}
