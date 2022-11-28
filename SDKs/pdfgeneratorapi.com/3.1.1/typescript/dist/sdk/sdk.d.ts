import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://us1.pdfgeneratorapi.com/api/v3"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * copyTemplate - Copy template
     *
     * Creates a copy of a template to the workspace specified in authentication parameters.
    **/
    copyTemplate(req: operations.CopyTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CopyTemplateResponse>;
    /**
     * createTemplate - Create template
     *
     * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
    **/
    createTemplate(req: operations.CreateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.CreateTemplateResponse>;
    /**
     * deleteTemplate - Delete template
     *
     * Deletes the template from workspace
    **/
    deleteTemplate(req: operations.DeleteTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTemplateResponse>;
    /**
     * deleteWorkspace - Delete workspace
     *
     * Deletes the workspace
    **/
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * getEditorUrl - Open editor
     *
     * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.
     *
    **/
    getEditorUrl(req: operations.GetEditorUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetEditorUrlResponse>;
    /**
     * getTemplate - Get template
     *
     * Returns template configuration
    **/
    getTemplate(req: operations.GetTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetTemplateResponse>;
    /**
     * getTemplates - Get templates
     *
     * Returns a list of templates available for the authenticated workspace
    **/
    getTemplates(config?: AxiosRequestConfig): Promise<operations.GetTemplatesResponse>;
    /**
     * getWorkspace - Get workspace
     *
     * Returns workspace information
    **/
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * mergeTemplate - Generate document
     *
     * Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    mergeTemplate(req: operations.MergeTemplateRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplateResponse>;
    /**
     * mergeTemplates - Generate document (multiple templates)
     *
     * Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
    **/
    mergeTemplates(req: operations.MergeTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.MergeTemplatesResponse>;
    /**
     * updateTemplate - Update template
     *
     * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
    **/
    updateTemplate(req: operations.UpdateTemplateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTemplateResponse>;
}
export {};
