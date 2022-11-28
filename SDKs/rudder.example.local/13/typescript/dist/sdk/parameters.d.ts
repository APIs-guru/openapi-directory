import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Parameters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createParameter - Create a new parameter
     *
     * Create a new global parameter
    **/
    createParameter(req: operations.CreateParameterRequest, config?: AxiosRequestConfig): Promise<operations.CreateParameterResponse>;
    /**
     * deleteParameter - Delete a parameter
     *
     * Delete an existing parameter
    **/
    deleteParameter(req: operations.DeleteParameterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParameterResponse>;
    /**
     * listParameters - List all global parameters
     *
     * Get the current value of all the global parameters
    **/
    listParameters(config?: AxiosRequestConfig): Promise<operations.ListParametersResponse>;
    /**
     * parameterDetails - Get the value of a parameter
     *
     * Get the current value of a given parameter
    **/
    parameterDetails(req: operations.ParameterDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ParameterDetailsResponse>;
    /**
     * updateParameter - Update a parameter's value
     *
     * Update the properties of a parameter
    **/
    updateParameter(req: operations.UpdateParameterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParameterResponse>;
}
