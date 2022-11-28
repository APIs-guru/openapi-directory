import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChangeRequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * acceptChangeRequest - Accept a request details
     *
     * Accept a change request
    **/
    acceptChangeRequest(req: operations.AcceptChangeRequestRequest, config?: AxiosRequestConfig): Promise<operations.AcceptChangeRequestResponse>;
    /**
     * changeRequestDetails - Get a change request details
     *
     * Get a change request details
    **/
    changeRequestDetails(req: operations.ChangeRequestDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ChangeRequestDetailsResponse>;
    /**
     * declineChangeRequest - Decline a request details
     *
     * Refuse a change request
    **/
    declineChangeRequest(req: operations.DeclineChangeRequestRequest, config?: AxiosRequestConfig): Promise<operations.DeclineChangeRequestResponse>;
    /**
     * listChangeRequests - List all change requests
     *
     * List all change requests
    **/
    listChangeRequests(config?: AxiosRequestConfig): Promise<operations.ListChangeRequestsResponse>;
    /**
     * listUsers - List user
     *
     * List all validated and unvalidated users
    **/
    listUsers(config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * removeValidatedUser - Remove an user from validated user list
     *
     * The user is again subject to workflow validation
    **/
    removeValidatedUser(req: operations.RemoveValidatedUserRequest, config?: AxiosRequestConfig): Promise<operations.RemoveValidatedUserResponse>;
    /**
     * saveWorkflowUser - Update validated user list
     *
     * Add and remove user from validated users
    **/
    saveWorkflowUser(req: operations.SaveWorkflowUserRequest, config?: AxiosRequestConfig): Promise<operations.SaveWorkflowUserResponse>;
    /**
     * updateChangeRequest - Update a request details
     *
     * Update a change request
    **/
    updateChangeRequest(req: operations.UpdateChangeRequestRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChangeRequestResponse>;
}
