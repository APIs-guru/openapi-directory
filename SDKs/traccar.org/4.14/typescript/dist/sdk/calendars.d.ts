import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calendars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCalendarsId - Delete a Calendar
    **/
    deleteCalendarsId(req: operations.DeleteCalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCalendarsIdResponse>;
    /**
     * getCalendars - Fetch a list of Calendars
     *
     * Without params, it returns a list of Calendars the user has access to
    **/
    getCalendars(req: operations.GetCalendarsRequest, config?: AxiosRequestConfig): Promise<operations.GetCalendarsResponse>;
    /**
     * postCalendars - Create a Calendar
    **/
    postCalendars(req: operations.PostCalendarsRequest, config?: AxiosRequestConfig): Promise<operations.PostCalendarsResponse>;
    /**
     * putCalendarsId - Update a Calendar
    **/
    putCalendarsId(req: operations.PutCalendarsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutCalendarsIdResponse>;
}
