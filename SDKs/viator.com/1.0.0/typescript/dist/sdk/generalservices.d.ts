import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GeneralServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * healthCheck - /health/check
     *
     * Health check
     * Use this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."
     *
    **/
    healthCheck(req: operations.HealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.HealthCheckResponse>;
}
