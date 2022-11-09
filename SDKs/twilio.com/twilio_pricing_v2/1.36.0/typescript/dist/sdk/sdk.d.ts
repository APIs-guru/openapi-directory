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
    FetchTrunkingCountry(req: operations.FetchTrunkingCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingCountryResponse>;
    FetchTrunkingNumber(req: operations.FetchTrunkingNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingNumberResponse>;
    FetchVoiceCountry(req: operations.FetchVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    FetchVoiceNumber(req: operations.FetchVoiceNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    ListTrunkingCountry(req: operations.ListTrunkingCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListTrunkingCountryResponse>;
    ListVoiceCountry(req: operations.ListVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
export {};
