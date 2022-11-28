import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupsSubscription {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * joinGroup - Add a user to a group
    **/
    joinGroup(req: operations.JoinGroupRequest, config?: AxiosRequestConfig): Promise<operations.JoinGroupResponse>;
    /**
     * joinGroupAlt1 - Add a user to a group
    **/
    joinGroupAlt1(req: operations.JoinGroupAlt1Request, config?: AxiosRequestConfig): Promise<operations.JoinGroupAlt1Response>;
    /**
     * leaveGroup - Remove a user from a group
    **/
    leaveGroup(req: operations.LeaveGroupRequest, config?: AxiosRequestConfig): Promise<operations.LeaveGroupResponse>;
    /**
     * leaveGroupAlt1 - Remove a user from a group
    **/
    leaveGroupAlt1(req: operations.LeaveGroupAlt1Request, config?: AxiosRequestConfig): Promise<operations.LeaveGroupAlt1Response>;
}
