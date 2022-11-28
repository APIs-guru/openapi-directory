import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addUser - Add user
     *
     * Add a new user
    **/
    addUser(req: operations.AddUserRequest, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * deleteUser - Delete an user
     *
     * Delete the user and his permissions
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * getRole - List all roles
     *
     * Get all available roles and their rights
    **/
    getRole(config?: AxiosRequestConfig): Promise<operations.GetRoleResponse>;
    /**
     * getUserInfo - List all users
     *
     * Get the list of all present users and their permissions
    **/
    getUserInfo(config?: AxiosRequestConfig): Promise<operations.GetUserInfoResponse>;
    /**
     * reloadUserConf - Reload user
     *
     * Reload the users from the file system, in the configuration file
    **/
    reloadUserConf(config?: AxiosRequestConfig): Promise<operations.ReloadUserConfResponse>;
    /**
     * updateUser - Update user's infos
     *
     * Rename, change password (pre-hashed or not) and change permission of an user. If a parameter is empty, it will be ignored.
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
