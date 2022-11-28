import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Attributes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteAttributesComputedId - Delete an Attribute
    **/
    deleteAttributesComputedId(req: operations.DeleteAttributesComputedIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAttributesComputedIdResponse>;
    /**
     * getAttributesComputed - Fetch a list of Attributes
     *
     * Without params, it returns a list of Attributes the user has access to
    **/
    getAttributesComputed(req: operations.GetAttributesComputedRequest, config?: AxiosRequestConfig): Promise<operations.GetAttributesComputedResponse>;
    /**
     * postAttributesComputed - Create an Attribute
    **/
    postAttributesComputed(req: operations.PostAttributesComputedRequest, config?: AxiosRequestConfig): Promise<operations.PostAttributesComputedResponse>;
    /**
     * putAttributesComputedId - Update an Attribute
    **/
    putAttributesComputedId(req: operations.PutAttributesComputedIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAttributesComputedIdResponse>;
}
