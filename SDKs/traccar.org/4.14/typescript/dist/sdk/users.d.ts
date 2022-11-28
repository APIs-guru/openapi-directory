import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUsersId - Delete a User
    **/
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * getUsers - Fetch a list of Users
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * postUsers - Create a User
    **/
    postUsers(req: operations.PostUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * putUsersId - Update a User
    **/
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
}
