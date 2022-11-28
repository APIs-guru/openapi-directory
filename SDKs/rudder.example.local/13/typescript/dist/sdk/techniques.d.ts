import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Techniques {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listTechniqueVersionDirectives - List all directives based on a version of a technique
     *
     * List all directives based on a version of a technique
    **/
    listTechniqueVersionDirectives(req: operations.ListTechniqueVersionDirectivesRequest, config?: AxiosRequestConfig): Promise<operations.ListTechniqueVersionDirectivesResponse>;
    /**
     * listTechniques - List all techniques
     *
     * List all technique with their versions
    **/
    listTechniques(config?: AxiosRequestConfig): Promise<operations.ListTechniquesResponse>;
    /**
     * listTechniquesDirectives - List all directives based on a technique
     *
     * List all directives based on all version of a technique
    **/
    listTechniquesDirectives(req: operations.ListTechniquesDirectivesRequest, config?: AxiosRequestConfig): Promise<operations.ListTechniquesDirectivesResponse>;
}
