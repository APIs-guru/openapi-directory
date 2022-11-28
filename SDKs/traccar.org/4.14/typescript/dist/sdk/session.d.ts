import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Session {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSession - Close the Session
    **/
    deleteSession(config?: AxiosRequestConfig): Promise<operations.DeleteSessionResponse>;
    /**
     * getSession - Fetch Session information
    **/
    getSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    /**
     * postSession - Create a new Session
    **/
    postSession(req: operations.PostSessionRequest, config?: AxiosRequestConfig): Promise<operations.PostSessionResponse>;
}
