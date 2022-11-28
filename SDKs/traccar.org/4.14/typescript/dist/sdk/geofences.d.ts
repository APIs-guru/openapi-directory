import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Geofences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteGeofencesId - Delete a Geofence
    **/
    deleteGeofencesId(req: operations.DeleteGeofencesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGeofencesIdResponse>;
    /**
     * getGeofences - Fetch a list of Geofences
     *
     * Without params, it returns a list of Geofences the user has access to
    **/
    getGeofences(req: operations.GetGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.GetGeofencesResponse>;
    /**
     * postGeofences - Create a Geofence
    **/
    postGeofences(req: operations.PostGeofencesRequest, config?: AxiosRequestConfig): Promise<operations.PostGeofencesResponse>;
    /**
     * putGeofencesId - Update a Geofence
    **/
    putGeofencesId(req: operations.PutGeofencesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutGeofencesIdResponse>;
}
