import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateExportCustomJob(req: operations.CreateExportCustomJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateExportCustomJobResponse>;
    DeleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    FetchDay(req: operations.FetchDayRequest, config?: AxiosRequestConfig): Promise<operations.FetchDayResponse>;
    FetchExport(req: operations.FetchExportRequest, config?: AxiosRequestConfig): Promise<operations.FetchExportResponse>;
    FetchExportConfiguration(req: operations.FetchExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchExportConfigurationResponse>;
    FetchJob(req: operations.FetchJobRequest, config?: AxiosRequestConfig): Promise<operations.FetchJobResponse>;
    ListDay(req: operations.ListDayRequest, config?: AxiosRequestConfig): Promise<operations.ListDayResponse>;
    ListExportCustomJob(req: operations.ListExportCustomJobRequest, config?: AxiosRequestConfig): Promise<operations.ListExportCustomJobResponse>;
    UpdateExportConfiguration(req: operations.UpdateExportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExportConfigurationResponse>;
}
export {};
