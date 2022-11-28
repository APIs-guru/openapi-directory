import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tenant {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getTenantTenantname - Get a Tenant
     *
     * This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
     * It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
     *
     * Tenantname is the name of the full DNS domain of the tenant you get.
     * In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
    **/
    getTenantTenantname(req: operations.GetTenantTenantnameRequest, config?: AxiosRequestConfig): Promise<operations.GetTenantTenantnameResponse>;
}
