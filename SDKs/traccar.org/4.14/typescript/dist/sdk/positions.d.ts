import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Positions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPositions - Fetches a list of Positions
     *
     * We strongly recommend using [Traccar WebSocket API](https://www.traccar.org/traccar-api/) instead of periodically polling positions endpoint. Without any params, it returns a list of last known positions for all the user's Devices. _from_ and _to_ fields are not required with _id_.
    **/
    getPositions(req: operations.GetPositionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPositionsResponse>;
}
