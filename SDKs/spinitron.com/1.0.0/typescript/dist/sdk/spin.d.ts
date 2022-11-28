import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSpins - Returns spins optionally filtered by {start} and/or {end} datetimes
     *
     * Get Spins optionally filtered by a datetime range. Only past Spins will be returned.
     *
    **/
    getSpins(req: operations.GetSpinsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpinsResponse>;
    /**
     * getSpinsId - Get a Spin by id
    **/
    getSpinsId(req: operations.GetSpinsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpinsIdResponse>;
    /**
     * postSpins - Log a Spin
     *
     * An endpoint for automation systems to log spins into the spin table.
    **/
    postSpins(req: operations.PostSpinsRequest, config?: AxiosRequestConfig): Promise<operations.PostSpinsResponse>;
}
