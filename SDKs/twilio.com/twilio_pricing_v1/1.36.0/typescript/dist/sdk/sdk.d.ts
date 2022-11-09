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
    FetchMessagingCountry(req: operations.FetchMessagingCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessagingCountryResponse>;
    FetchPhoneNumberCountry(req: operations.FetchPhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberCountryResponse>;
    FetchVoiceCountry(req: operations.FetchVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    FetchVoiceNumber(req: operations.FetchVoiceNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    ListMessagingCountry(req: operations.ListMessagingCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListMessagingCountryResponse>;
    ListPhoneNumberCountry(req: operations.ListPhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberCountryResponse>;
    ListVoiceCountry(req: operations.ListVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
export {};
