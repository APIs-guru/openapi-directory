import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://randommer.io"];
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
     * getApiCard - Get Card
    **/
    getApiCard(req: operations.GetApiCardRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardResponse>;
    /**
     * getApiCardTypes - Get available card types
    **/
    getApiCardTypes(req: operations.GetApiCardTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardTypesResponse>;
    getApiMiscCultures(req: operations.GetApiMiscCulturesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscCulturesResponse>;
    getApiMiscRandomAddress(req: operations.GetApiMiscRandomAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscRandomAddressResponse>;
    /**
     * getApiName - Get name
    **/
    getApiName(req: operations.GetApiNameRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameResponse>;
    /**
     * getApiNameSuggestions - Get business name suggestions
    **/
    getApiNameSuggestions(req: operations.GetApiNameSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameSuggestionsResponse>;
    /**
     * getApiPhoneCountries - Get available countries
    **/
    getApiPhoneCountries(req: operations.GetApiPhoneCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneCountriesResponse>;
    /**
     * getApiPhoneGenerate - Get bulk telephone numbers for a country
    **/
    getApiPhoneGenerate(req: operations.GetApiPhoneGenerateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneGenerateResponse>;
    /**
     * getApiPhoneValidate - Validate a phone number
    **/
    getApiPhoneValidate(req: operations.GetApiPhoneValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneValidateResponse>;
    /**
     * getApiSocialNumber - Generate a social security number
    **/
    getApiSocialNumber(req: operations.GetApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSocialNumberResponse>;
    /**
     * getApiTextLoremIpsum - Generate lorem ipsum
    **/
    getApiTextLoremIpsum(req: operations.GetApiTextLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextLoremIpsumResponse>;
    /**
     * getApiTextPassword - Generate password
    **/
    getApiTextPassword(req: operations.GetApiTextPasswordRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextPasswordResponse>;
    /**
     * postApiSocialNumber - Validate VAT/identity numbers
    **/
    postApiSocialNumber(req: operations.PostApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.PostApiSocialNumberResponse>;
    /**
     * postApiTextHumanize - Humanize text
    **/
    postApiTextHumanize(req: operations.PostApiTextHumanizeRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextHumanizeResponse>;
    /**
     * postApiTextTransform - Transform text
    **/
    postApiTextTransform(req: operations.PostApiTextTransformRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextTransformResponse>;
}
export {};
