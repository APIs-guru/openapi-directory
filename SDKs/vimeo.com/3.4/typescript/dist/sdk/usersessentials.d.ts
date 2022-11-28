import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersEssentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * editUser - Edit a user
    **/
    editUser(req: operations.EditUserRequest, config?: AxiosRequestConfig): Promise<operations.EditUserResponse>;
    /**
     * editUserAlt1 - Edit a user
    **/
    editUserAlt1(req: operations.EditUserAlt1Request, config?: AxiosRequestConfig): Promise<operations.EditUserAlt1Response>;
    /**
     * getUser - Get a user
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserAlt1 - Get a user
    **/
    getUserAlt1(config?: AxiosRequestConfig): Promise<operations.GetUserAlt1Response>;
}
