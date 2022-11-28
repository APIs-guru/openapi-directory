import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AuthController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBasicUserInformation - Get Basic User Information
     *
     * Once logged in and have a token, get basic user information including group role membership
    **/
    getBasicUserInformation(req: operations.GetBasicUserInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetBasicUserInformationResponse>;
    /**
     * logIn - Log In
     *
     * Authenticate using username and password, returns token, which must be added to X-Auth-Token in header of all future requests
    **/
    logIn(req: operations.LogInRequest, config?: AxiosRequestConfig): Promise<operations.LogInResponse>;
    /**
     * logOut - Log Out
     *
     * Log Out
    **/
    logOut(req: operations.LogOutRequest, config?: AxiosRequestConfig): Promise<operations.LogOutResponse>;
}
