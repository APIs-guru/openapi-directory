import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Notifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteNotificationsId - Delete a Notification
    **/
    deleteNotificationsId(req: operations.DeleteNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationsIdResponse>;
    /**
     * getNotifications - Fetch a list of Notifications
     *
     * Without params, it returns a list of Notifications the user has access to
    **/
    getNotifications(req: operations.GetNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationsResponse>;
    /**
     * getNotificationsTypes - Fetch a list of available Notification types
    **/
    getNotificationsTypes(config?: AxiosRequestConfig): Promise<operations.GetNotificationsTypesResponse>;
    /**
     * postNotifications - Create a Notification
    **/
    postNotifications(req: operations.PostNotificationsRequest, config?: AxiosRequestConfig): Promise<operations.PostNotificationsResponse>;
    /**
     * postNotificationsTest - Send test notification to current user via Email and SMS
    **/
    postNotificationsTest(config?: AxiosRequestConfig): Promise<operations.PostNotificationsTestResponse>;
    /**
     * putNotificationsId - Update a Notification
    **/
    putNotificationsId(req: operations.PutNotificationsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutNotificationsIdResponse>;
}
