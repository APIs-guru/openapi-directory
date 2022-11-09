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
    GetIp(config?: AxiosRequestConfig): Promise<operations.GetIpResponse>;
    GetIpIpv4(req: operations.GetIpIpv4Request, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4Response>;
    GetIpIpv4Txt(req: operations.GetIpIpv4TxtRequest, config?: AxiosRequestConfig): Promise<operations.GetIpIpv4TxtResponse>;
    GetIpTxt(config?: AxiosRequestConfig): Promise<operations.GetIpTxtResponse>;
    GetTimezone(config?: AxiosRequestConfig): Promise<operations.GetTimezoneResponse>;
    GetTimezoneArea(req: operations.GetTimezoneAreaRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaResponse>;
    GetTimezoneAreaLocation(req: operations.GetTimezoneAreaLocationRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationResponse>;
    GetTimezoneAreaLocationRegion(req: operations.GetTimezoneAreaLocationRegionRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionResponse>;
    GetTimezoneAreaLocationRegionTxt(req: operations.GetTimezoneAreaLocationRegionTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationRegionTxtResponse>;
    GetTimezoneAreaLocationTxt(req: operations.GetTimezoneAreaLocationTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaLocationTxtResponse>;
    GetTimezoneAreaTxt(req: operations.GetTimezoneAreaTxtRequest, config?: AxiosRequestConfig): Promise<operations.GetTimezoneAreaTxtResponse>;
    GetTimezoneTxt(config?: AxiosRequestConfig): Promise<operations.GetTimezoneTxtResponse>;
}
export {};
