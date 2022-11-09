import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    DriverDetails(req: operations.DriverDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DriverDetailsResponse>;
    DriverRaceProjectionsEntryList(req: operations.DriverRaceProjectionsEntryListRequest, config?: AxiosRequestConfig): Promise<operations.DriverRaceProjectionsEntryListResponse>;
    Drivers(req: operations.DriversRequest, config?: AxiosRequestConfig): Promise<operations.DriversResponse>;
    RaceResults(req: operations.RaceResultsRequest, config?: AxiosRequestConfig): Promise<operations.RaceResultsResponse>;
    RacesSchedule(req: operations.RacesScheduleRequest, config?: AxiosRequestConfig): Promise<operations.RacesScheduleResponse>;
    Series(req: operations.SeriesRequest, config?: AxiosRequestConfig): Promise<operations.SeriesResponse>;
}
export {};
