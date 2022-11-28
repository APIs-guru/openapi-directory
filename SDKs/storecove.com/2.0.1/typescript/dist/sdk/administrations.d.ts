import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Administrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAdministration - Create a new Administration
     *
     * Create a new Administration. An Administration is an email destination for purchase invoices.
    **/
    createAdministration(req: operations.CreateAdministrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateAdministrationResponse>;
    /**
     * deleteAdministration - Delete Administration
     *
     * Delete an Administration
    **/
    deleteAdministration(req: operations.DeleteAdministrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAdministrationResponse>;
    /**
     * getAdministration - Get Administration
     *
     * Get an Administration
    **/
    getAdministration(req: operations.GetAdministrationRequest, config?: AxiosRequestConfig): Promise<operations.GetAdministrationResponse>;
    /**
     * updateAdministration - Update Administration
     *
     * Update an Administration
    **/
    updateAdministration(req: operations.UpdateAdministrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAdministrationResponse>;
}
