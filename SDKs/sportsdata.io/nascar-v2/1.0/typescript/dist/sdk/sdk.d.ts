import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * driverDetails - Driver Details
    **/
    driverDetails(req: operations.DriverDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DriverDetailsResponse>;
    /**
     * driverRaceProjectionsEntryList - Driver Race Projections (Entry List)
    **/
    driverRaceProjectionsEntryList(req: operations.DriverRaceProjectionsEntryListRequest, config?: AxiosRequestConfig): Promise<operations.DriverRaceProjectionsEntryListResponse>;
    /**
     * drivers - Drivers
    **/
    drivers(req: operations.DriversRequest, config?: AxiosRequestConfig): Promise<operations.DriversResponse>;
    /**
     * raceResults - Race Results
    **/
    raceResults(req: operations.RaceResultsRequest, config?: AxiosRequestConfig): Promise<operations.RaceResultsResponse>;
    /**
     * racesSchedule - Races / Schedule
    **/
    racesSchedule(req: operations.RacesScheduleRequest, config?: AxiosRequestConfig): Promise<operations.RacesScheduleResponse>;
    /**
     * series - Series
    **/
    series(req: operations.SeriesRequest, config?: AxiosRequestConfig): Promise<operations.SeriesResponse>;
}
export {};
