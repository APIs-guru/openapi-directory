import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createGroupCategory - Create a group category
     *
     * Create a new group category
    **/
    createGroupCategory(req: operations.CreateGroupCategoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupCategoryResponse>;
    /**
     * deleteGroupCategory - Delete group category
     *
     * Delete a group category. It must have no child groups and no children categories.
    **/
    deleteGroupCategory(req: operations.DeleteGroupCategoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupCategoryResponse>;
    /**
     * getGroupCategoryDetails - Get group category details
     *
     * Get detailed information about a group category
    **/
    getGroupCategoryDetails(req: operations.GetGroupCategoryDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCategoryDetailsResponse>;
    /**
     * getGroupTree - Get groups tree
     *
     * Get all available groups and their categories in a tree
    **/
    getGroupTree(config?: AxiosRequestConfig): Promise<operations.GetGroupTreeResponse>;
    /**
     * updateGroupCategory - Update group category details
     *
     * Update detailed information about a group category
    **/
    updateGroupCategory(req: operations.UpdateGroupCategoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupCategoryResponse>;
    /**
     * createGroup - Create a group
     *
     * Create a new group based in provided parameters
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * deleteGroup - Delete a group
     *
     * Update detailed information about a group
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * groupDetails - Get group details
     *
     * Get detailed information about a group
    **/
    groupDetails(req: operations.GroupDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GroupDetailsResponse>;
    /**
     * listGroups - List all groups
     *
     * List all groups
    **/
    listGroups(config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * reloadGroup - Reload a group
     *
     * Recompute the content of a group
    **/
    reloadGroup(req: operations.ReloadGroupRequest, config?: AxiosRequestConfig): Promise<operations.ReloadGroupResponse>;
    /**
     * updateGroup - Update group details
     *
     * Update detailed information about a group
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
}
