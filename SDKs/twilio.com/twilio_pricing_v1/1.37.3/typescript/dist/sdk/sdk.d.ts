import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://pricing.twilio.com"];
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
    fetchMessagingCountry(req: operations.FetchMessagingCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessagingCountryResponse>;
    fetchPhoneNumberCountry(req: operations.FetchPhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchPhoneNumberCountryResponse>;
    fetchVoiceCountry(req: operations.FetchVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    fetchVoiceNumber(req: operations.FetchVoiceNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    listMessagingCountry(req: operations.ListMessagingCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListMessagingCountryResponse>;
    listPhoneNumberCountry(req: operations.ListPhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListPhoneNumberCountryResponse>;
    listVoiceCountry(req: operations.ListVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
export {};
