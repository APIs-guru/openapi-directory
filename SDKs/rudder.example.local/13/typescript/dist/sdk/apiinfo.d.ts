import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ApiInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * apiGeneralInformations - List all endoints
     *
     * List all endpoints and their version
    **/
    apiGeneralInformations(config?: AxiosRequestConfig): Promise<operations.ApiGeneralInformationsResponse>;
    /**
     * apiInformations - Get information about one API endpoint
     *
     * Get the description and the list of supported version for one API endpoint
    **/
    apiInformations(req: operations.ApiInformationsRequest, config?: AxiosRequestConfig): Promise<operations.ApiInformationsResponse>;
    /**
     * apiSubInformations - Get information on endpoint in a section
     *
     * Get all endpoints in the given section with their supported version.
    **/
    apiSubInformations(req: operations.ApiSubInformationsRequest, config?: AxiosRequestConfig): Promise<operations.ApiSubInformationsResponse>;
}
