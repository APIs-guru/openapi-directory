import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Services {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOneService - Gets detailed information about a specific service.
     *
     * You need to provide a <b>Service ID</b> ID :<br>- use the <b>hardware/services</b> service to get all available service IDs.
    **/
    getOneService(req: operations.GetOneServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetOneServiceResponse>;
    /**
     * getServices - Gets summarized information about all monitored services.
     *
     * Lists the available ServiceSummary instances.
    **/
    getServices(req: operations.GetServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetServicesResponse>;
}
