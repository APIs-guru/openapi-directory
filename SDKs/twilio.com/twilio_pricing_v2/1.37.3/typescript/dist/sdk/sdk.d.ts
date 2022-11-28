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
    /**
     * fetchTrunkingCountry - Fetch a specific Country.
    **/
    fetchTrunkingCountry(req: operations.FetchTrunkingCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingCountryResponse>;
    /**
     * fetchTrunkingNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
    **/
    fetchTrunkingNumber(req: operations.FetchTrunkingNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchTrunkingNumberResponse>;
    /**
     * fetchVoiceCountry - Fetch a specific Country.
    **/
    fetchVoiceCountry(req: operations.FetchVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceCountryResponse>;
    /**
     * fetchVoiceNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
    **/
    fetchVoiceNumber(req: operations.FetchVoiceNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchVoiceNumberResponse>;
    listTrunkingCountry(req: operations.ListTrunkingCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListTrunkingCountryResponse>;
    listVoiceCountry(req: operations.ListVoiceCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListVoiceCountryResponse>;
}
export {};
