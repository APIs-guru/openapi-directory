import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Persona {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPersonas - Get Personas
    **/
    getPersonas(req: operations.GetPersonasRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonasResponse>;
    /**
     * getPersonasId - Get Persona by id
    **/
    getPersonasId(req: operations.GetPersonasIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonasIdResponse>;
}
