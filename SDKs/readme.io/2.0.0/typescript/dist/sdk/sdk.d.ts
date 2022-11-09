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
    /**
     * Create a new changelog inside of this project
    **/
    CreateChangelog(req: operations.CreateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.CreateChangelogResponse>;
    /**
     * Create a new custom page inside of this project
    **/
    CreateCustomPage(req: operations.CreateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPageResponse>;
    /**
     * Create a new doc inside of this project
    **/
    CreateDoc(req: operations.CreateDocRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocResponse>;
    /**
     * Create a new version
    **/
    CreateVersion(req: operations.CreateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVersionResponse>;
    DeleteApiSpecification(req: operations.DeleteApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiSpecificationResponse>;
    /**
     * Delete the changelog with this slug
    **/
    DeleteChangelog(req: operations.DeleteChangelogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChangelogResponse>;
    /**
     * Delete the custom page with this slug
    **/
    DeleteCustomPage(req: operations.DeleteCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomPageResponse>;
    /**
     * Delete the doc with this slug
    **/
    DeleteDoc(req: operations.DeleteDocRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocResponse>;
    DeleteSwagger(req: operations.DeleteSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSwaggerResponse>;
    /**
     * Delete a version
    **/
    DeleteVersion(req: operations.DeleteVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVersionResponse>;
    GetApiSpecification(req: operations.GetApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSpecificationResponse>;
    /**
     * Returns the category with this slug
    **/
    GetCategory(req: operations.GetCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
    /**
     * Returns the docs and children docs within this category
    **/
    GetCategoryDocs(req: operations.GetCategoryDocsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryDocsResponse>;
    /**
     * Returns the changelog with this slug
    **/
    GetChangelog(req: operations.GetChangelogRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogResponse>;
    /**
     * Returns a list of changelogs associated with the project API key
    **/
    GetChangelogs(req: operations.GetChangelogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogsResponse>;
    /**
     * Returns the custom page with this slug
    **/
    GetCustomPage(req: operations.GetCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPageResponse>;
    /**
     * Returns a list of custom pages associated with the project API key
    **/
    GetCustomPages(req: operations.GetCustomPagesRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPagesResponse>;
    /**
     * Returns the doc with this slug
    **/
    GetDoc(req: operations.GetDocRequest, config?: AxiosRequestConfig): Promise<operations.GetDocResponse>;
    /**
     * Returns with all of the error page types for this project
    **/
    GetErrors(req: operations.GetErrorsRequest, config?: AxiosRequestConfig): Promise<operations.GetErrorsResponse>;
    /**
     * Returns project data for API key
    **/
    GetProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Returns the version with this version ID
    **/
    GetVersion(req: operations.GetVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * Retrieve a list of versions associated with a project API key
    **/
    GetVersions(req: operations.GetVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse>;
    /**
     * Returns all docs that match the search
    **/
    SearchDocs(req: operations.SearchDocsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDocsResponse>;
    UpdateApiSpecification(req: operations.UpdateApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiSpecificationResponse>;
    /**
     * Update a changelog with this slug
    **/
    UpdateChangelog(req: operations.UpdateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChangelogResponse>;
    /**
     * Update a custom page with this slug
    **/
    UpdateCustomPage(req: operations.UpdateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomPageResponse>;
    /**
     * Update a doc with this slug
    **/
    UpdateDoc(req: operations.UpdateDocRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocResponse>;
    UpdateSwagger(req: operations.UpdateSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSwaggerResponse>;
    /**
     * Update an existing version
    **/
    UpdateVersion(req: operations.UpdateVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVersionResponse>;
    UploadApiSpecification(req: operations.UploadApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UploadApiSpecificationResponse>;
    UploadSwagger(req: operations.UploadSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UploadSwaggerResponse>;
}
export {};
