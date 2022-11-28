import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEvent - Get event
    **/
    getEvent(req: operations.GetEventRequest, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * getEventsCount - Get events count
    **/
    getEventsCount(req: operations.GetEventsCountRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsCountResponse>;
    /**
     * listEvents - List events
    **/
    listEvents(req: operations.ListEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsResponse>;
}
