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
     * deleteGroupsId - Delete a Group
    **/
    deleteGroupsId(req: operations.DeleteGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupsIdResponse>;
    /**
     * getGroups - Fetch a list of Groups
     *
     * Without any params, returns a list of the Groups the user belongs to
    **/
    getGroups(req: operations.GetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsResponse>;
    /**
     * postGroups - Create a Group
    **/
    postGroups(req: operations.PostGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostGroupsResponse>;
    /**
     * putGroupsId - Update a Group
    **/
    putGroupsId(req: operations.PutGroupsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutGroupsIdResponse>;
}
