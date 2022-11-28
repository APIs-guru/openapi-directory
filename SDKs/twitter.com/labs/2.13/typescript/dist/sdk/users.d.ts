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
     * findUserById - Return details for the specified users
     *
     * This endpoint returns information about a user. Specify user by ID.
    **/
    findUserById(req: operations.FindUserByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindUserByIdResponse>;
    /**
     * findUserByUsername - Return details for the specified users
     *
     * This endpoint returns information about a user. Specify user by username.
    **/
    findUserByUsername(req: operations.FindUserByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.FindUserByUsernameResponse>;
    /**
     * findUsersById - Return details for the specified users
     *
     * This endpoint returns information about users. Specify users by their ID.
    **/
    findUsersById(req: operations.FindUsersByIdRequest, config?: AxiosRequestConfig): Promise<operations.FindUsersByIdResponse>;
    /**
     * findUsersByUsername - Return details for the specified users
     *
     * This endpoint returns information about users. Specify users by their username.
    **/
    findUsersByUsername(req: operations.FindUsersByUsernameRequest, config?: AxiosRequestConfig): Promise<operations.FindUsersByUsernameResponse>;
}
