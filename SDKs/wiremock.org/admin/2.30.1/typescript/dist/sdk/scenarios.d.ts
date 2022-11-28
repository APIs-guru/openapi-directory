import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Scenarios {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAdminScenarios - Get all scenarios
    **/
    getAdminScenarios(config?: AxiosRequestConfig): Promise<operations.GetAdminScenariosResponse>;
    /**
     * postAdminScenariosReset - Reset the state of all scenarios
    **/
    postAdminScenariosReset(config?: AxiosRequestConfig): Promise<operations.PostAdminScenariosResetResponse>;
}
