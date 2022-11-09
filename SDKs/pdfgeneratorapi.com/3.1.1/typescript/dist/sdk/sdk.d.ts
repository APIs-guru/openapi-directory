import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Creates a copy of a template to the workspace specified in authentication parameters.
    **/
    CopyTemplate(req: operations.CopyTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CopyTemplateResponse>;
    /**
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
    **/
    CreateTemplate(req: operations.CreateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateResponse>;
    /**
     * Deletes the template from workspace
    **/
    DeleteTemplate(req: operations.DeleteTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplateResponse>;
    /**
     * Deletes the workspace
    **/
    DeleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.
     *
    **/
    GetEditorUrl(req: operations.GetEditorUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorUrlResponse>;
    /**
     * Returns template configuration
    **/
    GetTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * Returns a list of templates available for the authenticated workspace
    **/
    GetTemplates(config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * Returns workspace information
    **/
    GetWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    MergeTemplate(req: operations.MergeTemplateRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplateResponse>;
    /**
     * Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    MergeTemplates(req: operations.MergeTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplatesResponse>;
    /**
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
    **/
    UpdateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
export {};
