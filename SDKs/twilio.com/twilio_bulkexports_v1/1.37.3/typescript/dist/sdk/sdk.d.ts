import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://bulkexports.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    createExportCustomJob(req: operations.CreateExportCustomJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateExportCustomJobResponse>;
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * fetchDay - Fetch a specific Day.
    **/
    fetchDay(req: operations.FetchDayRequest, config?: AxiosRequestConfig): Promise<operations.FetchDayResponse>;
    /**
     * fetchExport - Fetch a specific Export.
    **/
    fetchExport(req: operations.FetchExportRequest, config?: AxiosRequestConfig): Promise<operations.FetchExportResponse>;
    /**
     * fetchExportConfiguration - Fetch a specific Export Configuration.
    **/
    fetchExportConfiguration(req: operations.FetchExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchExportConfigurationResponse>;
    fetchJob(req: operations.FetchJobRequest, config?: AxiosRequestConfig): Promise<operations.FetchJobResponse>;
    /**
     * listDay - Retrieve a list of all Days for a resource.
    **/
    listDay(req: operations.ListDayRequest, config?: AxiosRequestConfig): Promise<operations.ListDayResponse>;
    listExportCustomJob(req: operations.ListExportCustomJobRequest, config?: AxiosRequestConfig): Promise<operations.ListExportCustomJobResponse>;
    /**
     * updateExportConfiguration - Update a specific Export Configuration.
    **/
    updateExportConfiguration(req: operations.UpdateExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExportConfigurationResponse>;
}
export {};
