import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmbedPresetsCustomLogos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createCustomLogo - Add a custom logo
    **/
    createCustomLogo(req: operations.CreateCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomLogoResponse>;
    /**
     * createCustomLogoAlt1 - Add a custom logo
    **/
    createCustomLogoAlt1(req: operations.CreateCustomLogoAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateCustomLogoAlt1Response>;
    /**
     * getCustomLogo - Get a specific custom logo
    **/
    getCustomLogo(req: operations.GetCustomLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomLogoResponse>;
    /**
     * getCustomLogoAlt1 - Get a specific custom logo
    **/
    getCustomLogoAlt1(req: operations.GetCustomLogoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetCustomLogoAlt1Response>;
    /**
     * getCustomLogos - Get all the custom logos that belong to a user
    **/
    getCustomLogos(req: operations.GetCustomLogosRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomLogosResponse>;
    /**
     * getCustomLogosAlt1 - Get all the custom logos that belong to a user
    **/
    getCustomLogosAlt1(config?: AxiosRequestConfig): Promise<operations.GetCustomLogosAlt1Response>;
}
