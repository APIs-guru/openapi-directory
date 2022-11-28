import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://dash.readme.io/api/v1"];
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
     * createChangelog - Create changelog
     *
     * Create a new changelog inside of this project
    **/
    createChangelog(req: operations.CreateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.CreateChangelogResponse>;
    /**
     * createCustomPage - Create custom page
     *
     * Create a new custom page inside of this project
    **/
    createCustomPage(req: operations.CreateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.CreateCustomPageResponse>;
    /**
     * createDoc - Create doc
     *
     * Create a new doc inside of this project
    **/
    createDoc(req: operations.CreateDocRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocResponse>;
    /**
     * createVersion - Create version
     *
     * Create a new version
    **/
    createVersion(req: operations.CreateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVersionResponse>;
    /**
     * deleteApiSpecification - Delete an API specification in ReadMe
    **/
    deleteApiSpecification(req: operations.DeleteApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiSpecificationResponse>;
    /**
     * deleteChangelog - Delete changelog
     *
     * Delete the changelog with this slug
    **/
    deleteChangelog(req: operations.DeleteChangelogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChangelogResponse>;
    /**
     * deleteCustomPage - Delete custom page
     *
     * Delete the custom page with this slug
    **/
    deleteCustomPage(req: operations.DeleteCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomPageResponse>;
    /**
     * deleteDoc - Delete doc
     *
     * Delete the doc with this slug
    **/
    deleteDoc(req: operations.DeleteDocRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocResponse>;
    /**
     * deleteSwagger - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
    **/
    deleteSwagger(req: operations.DeleteSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSwaggerResponse>;
    /**
     * deleteVersion - Delete version
     *
     * Delete a version
    **/
    deleteVersion(req: operations.DeleteVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVersionResponse>;
    /**
     * getApiSpecification - Get API specification metadata
    **/
    getApiSpecification(req: operations.GetApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSpecificationResponse>;
    /**
     * getCategory - Get category
     *
     * Returns the category with this slug
    **/
    getCategory(req: operations.GetCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryResponse>;
    /**
     * getCategoryDocs - Get docs for category
     *
     * Returns the docs and children docs within this category
    **/
    getCategoryDocs(req: operations.GetCategoryDocsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoryDocsResponse>;
    /**
     * getChangelog - Get changelog
     *
     * Returns the changelog with this slug
    **/
    getChangelog(req: operations.GetChangelogRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogResponse>;
    /**
     * getChangelogs - Get changelogs
     *
     * Returns a list of changelogs associated with the project API key
    **/
    getChangelogs(req: operations.GetChangelogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogsResponse>;
    /**
     * getCustomPage - Get custom page
     *
     * Returns the custom page with this slug
    **/
    getCustomPage(req: operations.GetCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPageResponse>;
    /**
     * getCustomPages - Get custom pages
     *
     * Returns a list of custom pages associated with the project API key
    **/
    getCustomPages(req: operations.GetCustomPagesRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomPagesResponse>;
    /**
     * getDoc - Get doc
     *
     * Returns the doc with this slug
    **/
    getDoc(req: operations.GetDocRequest, config?: AxiosRequestConfig): Promise<operations.GetDocResponse>;
    /**
     * getErrors - Get errors
     *
     * Returns with all of the error page types for this project
    **/
    getErrors(req: operations.GetErrorsRequest, config?: AxiosRequestConfig): Promise<operations.GetErrorsResponse>;
    /**
     * getProject - Get metadata about the current project
     *
     * Returns project data for API key
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getVersion - Get version
     *
     * Returns the version with this version ID
    **/
    getVersion(req: operations.GetVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * getVersions - Get versions
     *
     * Retrieve a list of versions associated with a project API key
    **/
    getVersions(req: operations.GetVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse>;
    /**
     * searchDocs - Search docs
     *
     * Returns all docs that match the search
    **/
    searchDocs(req: operations.SearchDocsRequest, config?: AxiosRequestConfig): Promise<operations.SearchDocsResponse>;
    /**
     * updateApiSpecification - Update an API specification in ReadMe
    **/
    updateApiSpecification(req: operations.UpdateApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiSpecificationResponse>;
    /**
     * updateChangelog - Update changelog
     *
     * Update a changelog with this slug
    **/
    updateChangelog(req: operations.UpdateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChangelogResponse>;
    /**
     * updateCustomPage - Update custom page
     *
     * Update a custom page with this slug
    **/
    updateCustomPage(req: operations.UpdateCustomPageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomPageResponse>;
    /**
     * updateDoc - Update doc
     *
     * Update a doc with this slug
    **/
    updateDoc(req: operations.UpdateDocRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDocResponse>;
    /**
     * updateSwagger - DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
    **/
    updateSwagger(req: operations.UpdateSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSwaggerResponse>;
    /**
     * updateVersion - Update version
     *
     * Update an existing version
    **/
    updateVersion(req: operations.UpdateVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVersionResponse>;
    /**
     * uploadApiSpecification - Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github
    **/
    uploadApiSpecification(req: operations.UploadApiSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.UploadApiSpecificationResponse>;
    /**
     * uploadSwagger - DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe
    **/
    uploadSwagger(req: operations.UploadSwaggerRequest, config?: AxiosRequestConfig): Promise<operations.UploadSwaggerResponse>;
}
export {};
