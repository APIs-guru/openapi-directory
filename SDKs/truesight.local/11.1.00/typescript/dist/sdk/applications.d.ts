import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApplications - Gets summarized information about all monitored applications.
     *
     * Lists all the available ApplicationSummary instances.
    **/
    getApplications(req: operations.GetApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationsResponse>;
    /**
     * getOneApplication - Gets detailed information for a specific application.
     *
     * You need to provide an <b>Application ID</b>:<br>- use the <b>hardware/applications</b> service to retrieve all available application IDs.
    **/
    getOneApplication(req: operations.GetOneApplicationRequest, config?: AxiosRequestConfig): Promise<operations.GetOneApplicationResponse>;
}
