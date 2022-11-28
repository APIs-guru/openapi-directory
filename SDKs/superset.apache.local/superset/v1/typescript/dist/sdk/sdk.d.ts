import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://superset.apache.local", "https://superset.apache.local/api/v1"];
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
     * deleteAnnotationLayer - Deletes multiple annotation layers in a bulk operation.
    **/
    deleteAnnotationLayer(req: operations.DeleteAnnotationLayerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationLayerResponse>;
    /**
     * deleteAnnotationLayerPk - Delete Annotation layer
    **/
    deleteAnnotationLayerPk(req: operations.DeleteAnnotationLayerPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationLayerPkResponse>;
    /**
     * deleteAnnotationLayerPkAnnotation - Deletes multiple annotation in a bulk operation.
    **/
    deleteAnnotationLayerPkAnnotation(req: operations.DeleteAnnotationLayerPkAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationLayerPkAnnotationResponse>;
    /**
     * deleteAnnotationLayerPkAnnotationAnnotationId - Delete Annotation layer
    **/
    deleteAnnotationLayerPkAnnotationAnnotationId(req: operations.DeleteAnnotationLayerPkAnnotationAnnotationIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationLayerPkAnnotationAnnotationIdResponse>;
    /**
     * deleteChart - Deletes multiple Charts in a bulk operation.
    **/
    deleteChart(req: operations.DeleteChartRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChartResponse>;
    /**
     * deleteChartPk - Deletes a Chart.
    **/
    deleteChartPk(req: operations.DeleteChartPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChartPkResponse>;
    /**
     * deleteCssTemplate - Deletes multiple css templates in a bulk operation.
    **/
    deleteCssTemplate(req: operations.DeleteCssTemplateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCssTemplateResponse>;
    /**
     * deleteCssTemplatePk - Delete CSS template
    **/
    deleteCssTemplatePk(req: operations.DeleteCssTemplatePkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCssTemplatePkResponse>;
    /**
     * deleteDashboard - Deletes multiple Dashboards in a bulk operation.
    **/
    deleteDashboard(req: operations.DeleteDashboardRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDashboardResponse>;
    /**
     * deleteDashboardPk - Deletes a Dashboard.
    **/
    deleteDashboardPk(req: operations.DeleteDashboardPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDashboardPkResponse>;
    /**
     * deleteDatabasePk - Deletes a Database.
    **/
    deleteDatabasePk(req: operations.DeleteDatabasePkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatabasePkResponse>;
    /**
     * deleteDataset - Deletes multiple Datasets in a bulk operation.
    **/
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * deleteDatasetPk - Deletes a Dataset
    **/
    deleteDatasetPk(req: operations.DeleteDatasetPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetPkResponse>;
    /**
     * deleteDatasetPkColumnColumnId - Delete a Dataset column
    **/
    deleteDatasetPkColumnColumnId(req: operations.DeleteDatasetPkColumnColumnIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetPkColumnColumnIdResponse>;
    /**
     * deleteDatasetPkMetricMetricId - Delete a Dataset metric
    **/
    deleteDatasetPkMetricMetricId(req: operations.DeleteDatasetPkMetricMetricIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetPkMetricMetricIdResponse>;
    /**
     * deleteReport - Deletes multiple report schedules in a bulk operation.
    **/
    deleteReport(req: operations.DeleteReportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportResponse>;
    /**
     * deleteReportPk - Delete a report schedule
    **/
    deleteReportPk(req: operations.DeleteReportPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportPkResponse>;
    /**
     * deleteSavedQuery - Deletes multiple saved queries in a bulk operation.
    **/
    deleteSavedQuery(req: operations.DeleteSavedQueryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSavedQueryResponse>;
    /**
     * deleteSavedQueryPk - Delete saved query
    **/
    deleteSavedQueryPk(req: operations.DeleteSavedQueryPkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSavedQueryPkResponse>;
    /**
     * getAnnotationLayer - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getAnnotationLayer(req: operations.GetAnnotationLayerRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerResponse>;
    /**
     * getAnnotationLayerInfo - Get metadata information about this API resource
    **/
    getAnnotationLayerInfo(req: operations.GetAnnotationLayerInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerInfoResponse>;
    /**
     * getAnnotationLayerPk - Get an Annotation layer
    **/
    getAnnotationLayerPk(req: operations.GetAnnotationLayerPkRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerPkResponse>;
    /**
     * getAnnotationLayerPkAnnotation - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getAnnotationLayerPkAnnotation(req: operations.GetAnnotationLayerPkAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerPkAnnotationResponse>;
    /**
     * getAnnotationLayerPkAnnotationAnnotationId - Get an Annotation layer
    **/
    getAnnotationLayerPkAnnotationAnnotationId(req: operations.GetAnnotationLayerPkAnnotationAnnotationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerPkAnnotationAnnotationIdResponse>;
    getAnnotationLayerRelatedColumnName(req: operations.GetAnnotationLayerRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationLayerRelatedColumnNameResponse>;
    /**
     * getAsyncEvent - Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.
    **/
    getAsyncEvent(req: operations.GetAsyncEventRequest, config?: AxiosRequestConfig): Promise<operations.GetAsyncEventResponse>;
    /**
     * getChart - Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
    **/
    getChart(req: operations.GetChartRequest, config?: AxiosRequestConfig): Promise<operations.GetChartResponse>;
    /**
     * getChartDataCacheKey - Takes a query context cache key and returns payload data response for the given query.
    **/
    getChartDataCacheKey(req: operations.GetChartDataCacheKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetChartDataCacheKeyResponse>;
    /**
     * getChartExport - Exports multiple charts and downloads them as YAML files
    **/
    getChartExport(req: operations.GetChartExportRequest, config?: AxiosRequestConfig): Promise<operations.GetChartExportResponse>;
    /**
     * getChartFavoriteStatus - Check favorited dashboards for current user
    **/
    getChartFavoriteStatus(req: operations.GetChartFavoriteStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetChartFavoriteStatusResponse>;
    /**
     * getChartInfo - Several metadata information about chart API endpoints.
    **/
    getChartInfo(req: operations.GetChartInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetChartInfoResponse>;
    /**
     * getChartPk - Get a chart detail information.
    **/
    getChartPk(req: operations.GetChartPkRequest, config?: AxiosRequestConfig): Promise<operations.GetChartPkResponse>;
    /**
     * getChartPkCacheScreenshot - Compute and cache a screenshot.
    **/
    getChartPkCacheScreenshot(req: operations.GetChartPkCacheScreenshotRequest, config?: AxiosRequestConfig): Promise<operations.GetChartPkCacheScreenshotResponse>;
    /**
     * getChartPkData - Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.
    **/
    getChartPkData(req: operations.GetChartPkDataRequest, config?: AxiosRequestConfig): Promise<operations.GetChartPkDataResponse>;
    /**
     * getChartPkScreenshotDigest - Get a computed screenshot from cache.
    **/
    getChartPkScreenshotDigest(req: operations.GetChartPkScreenshotDigestRequest, config?: AxiosRequestConfig): Promise<operations.GetChartPkScreenshotDigestResponse>;
    /**
     * getChartPkThumbnailDigest - Compute or get already computed chart thumbnail from cache.
    **/
    getChartPkThumbnailDigest(req: operations.GetChartPkThumbnailDigestRequest, config?: AxiosRequestConfig): Promise<operations.GetChartPkThumbnailDigestResponse>;
    /**
     * getChartRelatedColumnName - Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter
    **/
    getChartRelatedColumnName(req: operations.GetChartRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetChartRelatedColumnNameResponse>;
    /**
     * getCssTemplate - Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getCssTemplate(req: operations.GetCssTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetCssTemplateResponse>;
    /**
     * getCssTemplateInfo - Get metadata information about this API resource
    **/
    getCssTemplateInfo(req: operations.GetCssTemplateInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCssTemplateInfoResponse>;
    /**
     * getCssTemplatePk - Get a CSS template
    **/
    getCssTemplatePk(req: operations.GetCssTemplatePkRequest, config?: AxiosRequestConfig): Promise<operations.GetCssTemplatePkResponse>;
    getCssTemplateRelatedColumnName(req: operations.GetCssTemplateRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetCssTemplateRelatedColumnNameResponse>;
    /**
     * getDashboard - Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
    **/
    getDashboard(req: operations.GetDashboardRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardResponse>;
    /**
     * getDashboardExport - Exports multiple Dashboards and downloads them as YAML files.
    **/
    getDashboardExport(req: operations.GetDashboardExportRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardExportResponse>;
    /**
     * getDashboardFavoriteStatus - Check favorited dashboards for current user
    **/
    getDashboardFavoriteStatus(req: operations.GetDashboardFavoriteStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardFavoriteStatusResponse>;
    /**
     * getDashboardIdOrSlug - Get a dashboard detail information.
    **/
    getDashboardIdOrSlug(req: operations.GetDashboardIdOrSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardIdOrSlugResponse>;
    /**
     * getDashboardIdOrSlugCharts - Get the chart definitions for a given dashboard
    **/
    getDashboardIdOrSlugCharts(req: operations.GetDashboardIdOrSlugChartsRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardIdOrSlugChartsResponse>;
    /**
     * getDashboardIdOrSlugDatasets - Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.
    **/
    getDashboardIdOrSlugDatasets(req: operations.GetDashboardIdOrSlugDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardIdOrSlugDatasetsResponse>;
    /**
     * getDashboardInfo - Several metadata information about dashboard API endpoints.
    **/
    getDashboardInfo(req: operations.GetDashboardInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardInfoResponse>;
    /**
     * getDashboardPkThumbnailDigest - Compute async or get already computed dashboard thumbnail from cache.
    **/
    getDashboardPkThumbnailDigest(req: operations.GetDashboardPkThumbnailDigestRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardPkThumbnailDigestResponse>;
    /**
     * getDashboardRelatedColumnName - Get a list of all possible owners for a dashboard.
    **/
    getDashboardRelatedColumnName(req: operations.GetDashboardRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDashboardRelatedColumnNameResponse>;
    /**
     * getDatabase - Get a list of models
    **/
    getDatabase(req: operations.GetDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseResponse>;
    /**
     * getDatabaseAvailable - Get names of databases currently available
    **/
    getDatabaseAvailable(req: operations.GetDatabaseAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseAvailableResponse>;
    /**
     * getDatabaseExport - Download database(s) and associated dataset(s) as a zip file
    **/
    getDatabaseExport(req: operations.GetDatabaseExportRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseExportResponse>;
    /**
     * getDatabaseInfo - Get metadata information about this API resource
    **/
    getDatabaseInfo(req: operations.GetDatabaseInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseInfoResponse>;
    /**
     * getDatabasePk - Get an item model
    **/
    getDatabasePk(req: operations.GetDatabasePkRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkResponse>;
    /**
     * getDatabasePkFunctionNames - Get function names supported by a database
    **/
    getDatabasePkFunctionNames(req: operations.GetDatabasePkFunctionNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkFunctionNamesResponse>;
    /**
     * getDatabasePkRelatedObjects - Get charts and dashboards count associated to a database
    **/
    getDatabasePkRelatedObjects(req: operations.GetDatabasePkRelatedObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkRelatedObjectsResponse>;
    /**
     * getDatabasePkSchemas - Get all schemas from a database
    **/
    getDatabasePkSchemas(req: operations.GetDatabasePkSchemasRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkSchemasResponse>;
    /**
     * getDatabasePkSelectStarTableName - Get database select star for table
    **/
    getDatabasePkSelectStarTableName(req: operations.GetDatabasePkSelectStarTableNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkSelectStarTableNameResponse>;
    /**
     * getDatabasePkSelectStarTableNameSchemaName - Get database select star for table
    **/
    getDatabasePkSelectStarTableNameSchemaName(req: operations.GetDatabasePkSelectStarTableNameSchemaNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkSelectStarTableNameSchemaNameResponse>;
    /**
     * getDatabasePkTableTableNameSchemaName - Get database table metadata
    **/
    getDatabasePkTableTableNameSchemaName(req: operations.GetDatabasePkTableTableNameSchemaNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasePkTableTableNameSchemaNameResponse>;
    /**
     * getDataset - Get a list of models
    **/
    getDataset(req: operations.GetDatasetRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetResponse>;
    getDatasetDistinctColumnName(req: operations.GetDatasetDistinctColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetDistinctColumnNameResponse>;
    /**
     * getDatasetExport - Exports multiple datasets and downloads them as YAML files
    **/
    getDatasetExport(req: operations.GetDatasetExportRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetExportResponse>;
    /**
     * getDatasetInfo - Get metadata information about this API resource
    **/
    getDatasetInfo(req: operations.GetDatasetInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetInfoResponse>;
    /**
     * getDatasetPk - Get an item model
    **/
    getDatasetPk(req: operations.GetDatasetPkRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetPkResponse>;
    /**
     * getDatasetPkRelatedObjects - Get charts and dashboards count associated to a dataset
    **/
    getDatasetPkRelatedObjects(req: operations.GetDatasetPkRelatedObjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetPkRelatedObjectsResponse>;
    getDatasetRelatedColumnName(req: operations.GetDatasetRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetRelatedColumnNameResponse>;
    /**
     * getLog - Get a list of models
    **/
    getLog(req: operations.GetLogRequest, config?: AxiosRequestConfig): Promise<operations.GetLogResponse>;
    /**
     * getLogPk - Get an item model
    **/
    getLogPk(req: operations.GetLogPkRequest, config?: AxiosRequestConfig): Promise<operations.GetLogPkResponse>;
    /**
     * getMenu - Get the menu data structure. Returns a forest like structure with the menu the user has access to
    **/
    getMenu(req: operations.GetMenuRequest, config?: AxiosRequestConfig): Promise<operations.GetMenuResponse>;
    /**
     * getOpenapiVersionOpenapi - Get the OpenAPI spec for a specific API version
    **/
    getOpenapiVersionOpenapi(req: operations.GetOpenapiVersionOpenapiRequest, config?: AxiosRequestConfig): Promise<operations.GetOpenapiVersionOpenapiResponse>;
    /**
     * getQuery - Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
    **/
    getQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    getQueryDistinctColumnName(req: operations.GetQueryDistinctColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryDistinctColumnNameResponse>;
    /**
     * getQueryPk - Get query detail information.
    **/
    getQueryPk(req: operations.GetQueryPkRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryPkResponse>;
    getQueryRelatedColumnName(req: operations.GetQueryRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryRelatedColumnNameResponse>;
    /**
     * getReport - Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getReport(req: operations.GetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * getReportInfo - Get metadata information about this API resource
    **/
    getReportInfo(req: operations.GetReportInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetReportInfoResponse>;
    /**
     * getReportPk - Get a report schedule
    **/
    getReportPk(req: operations.GetReportPkRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPkResponse>;
    /**
     * getReportPkLog - Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getReportPkLog(req: operations.GetReportPkLogRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPkLogResponse>;
    /**
     * getReportPkLogLogId - Get a report schedule log
    **/
    getReportPkLogLogId(req: operations.GetReportPkLogLogIdRequest, config?: AxiosRequestConfig): Promise<operations.GetReportPkLogLogIdResponse>;
    getReportRelatedColumnName(req: operations.GetReportRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetReportRelatedColumnNameResponse>;
    /**
     * getSavedQuery - Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
    **/
    getSavedQuery(req: operations.GetSavedQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryResponse>;
    getSavedQueryDistinctColumnName(req: operations.GetSavedQueryDistinctColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryDistinctColumnNameResponse>;
    /**
     * getSavedQueryExport - Exports multiple saved queries and downloads them as YAML files
    **/
    getSavedQueryExport(req: operations.GetSavedQueryExportRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryExportResponse>;
    /**
     * getSavedQueryInfo - Get metadata information about this API resource
    **/
    getSavedQueryInfo(req: operations.GetSavedQueryInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryInfoResponse>;
    /**
     * getSavedQueryPk - Get a saved query
    **/
    getSavedQueryPk(req: operations.GetSavedQueryPkRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryPkResponse>;
    getSavedQueryRelatedColumnName(req: operations.GetSavedQueryRelatedColumnNameRequest, config?: AxiosRequestConfig): Promise<operations.GetSavedQueryRelatedColumnNameResponse>;
    /**
     * getSecurityCsrfToken - Fetch the CSRF token
    **/
    getSecurityCsrfToken(req: operations.GetSecurityCsrfTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityCsrfTokenResponse>;
    /**
     * postAnnotationLayer - Create an Annotation layer
    **/
    postAnnotationLayer(req: operations.PostAnnotationLayerRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnotationLayerResponse>;
    /**
     * postAnnotationLayerPkAnnotation - Create an Annotation layer
    **/
    postAnnotationLayerPkAnnotation(req: operations.PostAnnotationLayerPkAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnotationLayerPkAnnotationResponse>;
    /**
     * postCachekeyInvalidate - Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records
    **/
    postCachekeyInvalidate(req: operations.PostCachekeyInvalidateRequest, config?: AxiosRequestConfig): Promise<operations.PostCachekeyInvalidateResponse>;
    /**
     * postChart - Create a new Chart.
    **/
    postChart(req: operations.PostChartRequest, config?: AxiosRequestConfig): Promise<operations.PostChartResponse>;
    /**
     * postChartData - Takes a query context constructed in the client and returns payload data response for the given query.
    **/
    postChartData(req: operations.PostChartDataRequest, config?: AxiosRequestConfig): Promise<operations.PostChartDataResponse>;
    postChartImport(req: operations.PostChartImportRequest, config?: AxiosRequestConfig): Promise<operations.PostChartImportResponse>;
    /**
     * postCssTemplate - Create a CSS template
    **/
    postCssTemplate(req: operations.PostCssTemplateRequest, config?: AxiosRequestConfig): Promise<operations.PostCssTemplateResponse>;
    /**
     * postDashboard - Create a new Dashboard.
    **/
    postDashboard(req: operations.PostDashboardRequest, config?: AxiosRequestConfig): Promise<operations.PostDashboardResponse>;
    postDashboardImport(req: operations.PostDashboardImportRequest, config?: AxiosRequestConfig): Promise<operations.PostDashboardImportResponse>;
    /**
     * postDatabase - Create a new Database.
    **/
    postDatabase(req: operations.PostDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.PostDatabaseResponse>;
    postDatabaseImport(req: operations.PostDatabaseImportRequest, config?: AxiosRequestConfig): Promise<operations.PostDatabaseImportResponse>;
    /**
     * postDatabaseTestConnection - Tests a database connection
    **/
    postDatabaseTestConnection(req: operations.PostDatabaseTestConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostDatabaseTestConnectionResponse>;
    /**
     * postDatabaseValidateParameters - Validates parameters used to connect to a database
    **/
    postDatabaseValidateParameters(req: operations.PostDatabaseValidateParametersRequest, config?: AxiosRequestConfig): Promise<operations.PostDatabaseValidateParametersResponse>;
    /**
     * postDataset - Create a new Dataset
    **/
    postDataset(req: operations.PostDatasetRequest, config?: AxiosRequestConfig): Promise<operations.PostDatasetResponse>;
    postDatasetImport(req: operations.PostDatasetImportRequest, config?: AxiosRequestConfig): Promise<operations.PostDatasetImportResponse>;
    postLog(req: operations.PostLogRequest, config?: AxiosRequestConfig): Promise<operations.PostLogResponse>;
    /**
     * postReport - Create a report schedule
    **/
    postReport(req: operations.PostReportRequest, config?: AxiosRequestConfig): Promise<operations.PostReportResponse>;
    /**
     * postSavedQuery - Create a saved query
    **/
    postSavedQuery(req: operations.PostSavedQueryRequest, config?: AxiosRequestConfig): Promise<operations.PostSavedQueryResponse>;
    postSavedQueryImport(req: operations.PostSavedQueryImportRequest, config?: AxiosRequestConfig): Promise<operations.PostSavedQueryImportResponse>;
    /**
     * postSecurityLogin - Authenticate and get a JWT access and refresh token
    **/
    postSecurityLogin(req: operations.PostSecurityLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostSecurityLoginResponse>;
    /**
     * postSecurityRefresh - Use the refresh token to get a new JWT access token
    **/
    postSecurityRefresh(req: operations.PostSecurityRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PostSecurityRefreshResponse>;
    /**
     * putAnnotationLayerPk - Update an Annotation layer
    **/
    putAnnotationLayerPk(req: operations.PutAnnotationLayerPkRequest, config?: AxiosRequestConfig): Promise<operations.PutAnnotationLayerPkResponse>;
    /**
     * putAnnotationLayerPkAnnotationAnnotationId - Update an Annotation layer
    **/
    putAnnotationLayerPkAnnotationAnnotationId(req: operations.PutAnnotationLayerPkAnnotationAnnotationIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAnnotationLayerPkAnnotationAnnotationIdResponse>;
    /**
     * putChartPk - Changes a Chart.
    **/
    putChartPk(req: operations.PutChartPkRequest, config?: AxiosRequestConfig): Promise<operations.PutChartPkResponse>;
    /**
     * putCssTemplatePk - Update a CSS template
    **/
    putCssTemplatePk(req: operations.PutCssTemplatePkRequest, config?: AxiosRequestConfig): Promise<operations.PutCssTemplatePkResponse>;
    /**
     * putDashboardPk - Changes a Dashboard.
    **/
    putDashboardPk(req: operations.PutDashboardPkRequest, config?: AxiosRequestConfig): Promise<operations.PutDashboardPkResponse>;
    /**
     * putDatabasePk - Changes a Database.
    **/
    putDatabasePk(req: operations.PutDatabasePkRequest, config?: AxiosRequestConfig): Promise<operations.PutDatabasePkResponse>;
    /**
     * putDatasetPk - Changes a Dataset
    **/
    putDatasetPk(req: operations.PutDatasetPkRequest, config?: AxiosRequestConfig): Promise<operations.PutDatasetPkResponse>;
    /**
     * putDatasetPkRefresh - Refreshes and updates columns of a dataset
    **/
    putDatasetPkRefresh(req: operations.PutDatasetPkRefreshRequest, config?: AxiosRequestConfig): Promise<operations.PutDatasetPkRefreshResponse>;
    /**
     * putReportPk - Update a report schedule
    **/
    putReportPk(req: operations.PutReportPkRequest, config?: AxiosRequestConfig): Promise<operations.PutReportPkResponse>;
    /**
     * putSavedQueryPk - Update a saved query
    **/
    putSavedQueryPk(req: operations.PutSavedQueryPkRequest, config?: AxiosRequestConfig): Promise<operations.PutSavedQueryPkResponse>;
}
export {};
