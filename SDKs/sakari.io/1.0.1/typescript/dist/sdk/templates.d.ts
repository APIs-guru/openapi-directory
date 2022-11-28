import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Templates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * templatesCreate - Create template
    **/
    templatesCreate(req: operations.TemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TemplatesCreateResponse>;
    /**
     * templatesFetch - Fetch template by ID
    **/
    templatesFetch(req: operations.TemplatesFetchRequest, config?: AxiosRequestConfig): Promise<operations.TemplatesFetchResponse>;
    /**
     * templatesFetchAll - Fetch templates
    **/
    templatesFetchAll(req: operations.TemplatesFetchAllRequest, config?: AxiosRequestConfig): Promise<operations.TemplatesFetchAllResponse>;
    /**
     * templatesRemove - Deletes a template
    **/
    templatesRemove(req: operations.TemplatesRemoveRequest, config?: AxiosRequestConfig): Promise<operations.TemplatesRemoveResponse>;
    /**
     * templatesUpdate - Updates a template
    **/
    templatesUpdate(req: operations.TemplatesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TemplatesUpdateResponse>;
}
