import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupsUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * checkIfUserJoinedGroup - Check if a user has joined a group
    **/
    checkIfUserJoinedGroup(req: operations.CheckIfUserJoinedGroupRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfUserJoinedGroupResponse>;
    /**
     * checkIfUserJoinedGroupAlt1 - Check if a user has joined a group
    **/
    checkIfUserJoinedGroupAlt1(req: operations.CheckIfUserJoinedGroupAlt1Request, config?: AxiosRequestConfig): Promise<operations.CheckIfUserJoinedGroupAlt1Response>;
    /**
     * getGroupMembers - Get all the members of a group
    **/
    getGroupMembers(req: operations.GetGroupMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupMembersResponse>;
    /**
     * getUserGroups - Get all the groups that a user has joined
    **/
    getUserGroups(req: operations.GetUserGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserGroupsResponse>;
    /**
     * getUserGroupsAlt1 - Get all the groups that a user has joined
    **/
    getUserGroupsAlt1(req: operations.GetUserGroupsAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetUserGroupsAlt1Response>;
}
