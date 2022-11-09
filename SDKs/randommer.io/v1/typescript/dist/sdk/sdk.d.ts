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
    GetApiCard(req: operations.GetApiCardRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardResponse>;
    GetApiCardTypes(req: operations.GetApiCardTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCardTypesResponse>;
    GetApiMiscCultures(req: operations.GetApiMiscCulturesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscCulturesResponse>;
    GetApiMiscRandomAddress(req: operations.GetApiMiscRandomAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMiscRandomAddressResponse>;
    GetApiName(req: operations.GetApiNameRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameResponse>;
    GetApiNameSuggestions(req: operations.GetApiNameSuggestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiNameSuggestionsResponse>;
    GetApiPhoneCountries(req: operations.GetApiPhoneCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneCountriesResponse>;
    GetApiPhoneGenerate(req: operations.GetApiPhoneGenerateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneGenerateResponse>;
    GetApiPhoneValidate(req: operations.GetApiPhoneValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneValidateResponse>;
    GetApiSocialNumber(req: operations.GetApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSocialNumberResponse>;
    GetApiTextLoremIpsum(req: operations.GetApiTextLoremIpsumRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextLoremIpsumResponse>;
    GetApiTextPassword(req: operations.GetApiTextPasswordRequest, config?: AxiosRequestConfig): Promise<operations.GetApiTextPasswordResponse>;
    PostApiSocialNumber(req: operations.PostApiSocialNumberRequest, config?: AxiosRequestConfig): Promise<operations.PostApiSocialNumberResponse>;
    PostApiTextHumanize(req: operations.PostApiTextHumanizeRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextHumanizeResponse>;
    PostApiTextTransform(req: operations.PostApiTextTransformRequest, config?: AxiosRequestConfig): Promise<operations.PostApiTextTransformResponse>;
}
export {};
