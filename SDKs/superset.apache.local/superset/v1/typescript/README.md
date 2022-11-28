# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteAnnotationLayerRequest, DeleteAnnotationLayerResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAnnotationLayerRequest = {
  security: {
    jwt: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  queryParams: {
    q: [
      7294065593462764783,
    ],
  },
};

sdk.sdk.deleteAnnotationLayer(req).then((res: DeleteAnnotationLayerResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteAnnotationLayer` - Deletes multiple annotation layers in a bulk operation.
* `deleteAnnotationLayerPk` - Delete Annotation layer
* `deleteAnnotationLayerPkAnnotation` - Deletes multiple annotation in a bulk operation.
* `deleteAnnotationLayerPkAnnotationAnnotationId` - Delete Annotation layer
* `deleteChart` - Deletes multiple Charts in a bulk operation.
* `deleteChartPk` - Deletes a Chart.
* `deleteCssTemplate` - Deletes multiple css templates in a bulk operation.
* `deleteCssTemplatePk` - Delete CSS template
* `deleteDashboard` - Deletes multiple Dashboards in a bulk operation.
* `deleteDashboardPk` - Deletes a Dashboard.
* `deleteDatabasePk` - Deletes a Database.
* `deleteDataset` - Deletes multiple Datasets in a bulk operation.
* `deleteDatasetPk` - Deletes a Dataset
* `deleteDatasetPkColumnColumnId` - Delete a Dataset column
* `deleteDatasetPkMetricMetricId` - Delete a Dataset metric
* `deleteReport` - Deletes multiple report schedules in a bulk operation.
* `deleteReportPk` - Delete a report schedule
* `deleteSavedQuery` - Deletes multiple saved queries in a bulk operation.
* `deleteSavedQueryPk` - Delete saved query
* `getAnnotationLayer` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getAnnotationLayerInfo` - Get metadata information about this API resource
* `getAnnotationLayerPk` - Get an Annotation layer
* `getAnnotationLayerPkAnnotation` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getAnnotationLayerPkAnnotationAnnotationId` - Get an Annotation layer
* `getAnnotationLayerRelatedColumnName`
* `getAsyncEvent` - Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.
* `getChart` - Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `getChartDataCacheKey` - Takes a query context cache key and returns payload data response for the given query.
* `getChartExport` - Exports multiple charts and downloads them as YAML files
* `getChartFavoriteStatus` - Check favorited dashboards for current user
* `getChartInfo` - Several metadata information about chart API endpoints.
* `getChartPk` - Get a chart detail information.
* `getChartPkCacheScreenshot` - Compute and cache a screenshot.
* `getChartPkData` - Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.
* `getChartPkScreenshotDigest` - Get a computed screenshot from cache.
* `getChartPkThumbnailDigest` - Compute or get already computed chart thumbnail from cache.
* `getChartRelatedColumnName` - Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter
* `getCssTemplate` - Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getCssTemplateInfo` - Get metadata information about this API resource
* `getCssTemplatePk` - Get a CSS template
* `getCssTemplateRelatedColumnName`
* `getDashboard` - Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `getDashboardExport` - Exports multiple Dashboards and downloads them as YAML files.
* `getDashboardFavoriteStatus` - Check favorited dashboards for current user
* `getDashboardIdOrSlug` - Get a dashboard detail information.
* `getDashboardIdOrSlugCharts` - Get the chart definitions for a given dashboard
* `getDashboardIdOrSlugDatasets` - Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.
* `getDashboardInfo` - Several metadata information about dashboard API endpoints.
* `getDashboardPkThumbnailDigest` - Compute async or get already computed dashboard thumbnail from cache.
* `getDashboardRelatedColumnName` - Get a list of all possible owners for a dashboard.
* `getDatabase` - Get a list of models
* `getDatabaseAvailable` - Get names of databases currently available
* `getDatabaseExport` - Download database(s) and associated dataset(s) as a zip file
* `getDatabaseInfo` - Get metadata information about this API resource
* `getDatabasePk` - Get an item model
* `getDatabasePkFunctionNames` - Get function names supported by a database
* `getDatabasePkRelatedObjects` - Get charts and dashboards count associated to a database
* `getDatabasePkSchemas` - Get all schemas from a database
* `getDatabasePkSelectStarTableName` - Get database select star for table
* `getDatabasePkSelectStarTableNameSchemaName` - Get database select star for table
* `getDatabasePkTableTableNameSchemaName` - Get database table metadata
* `getDataset` - Get a list of models
* `getDatasetDistinctColumnName`
* `getDatasetExport` - Exports multiple datasets and downloads them as YAML files
* `getDatasetInfo` - Get metadata information about this API resource
* `getDatasetPk` - Get an item model
* `getDatasetPkRelatedObjects` - Get charts and dashboards count associated to a dataset
* `getDatasetRelatedColumnName`
* `getLog` - Get a list of models
* `getLogPk` - Get an item model
* `getMenu` - Get the menu data structure. Returns a forest like structure with the menu the user has access to
* `getOpenapiVersionOpenapi` - Get the OpenAPI spec for a specific API version
* `getQuery` - Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `getQueryDistinctColumnName`
* `getQueryPk` - Get query detail information.
* `getQueryRelatedColumnName`
* `getReport` - Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getReportInfo` - Get metadata information about this API resource
* `getReportPk` - Get a report schedule
* `getReportPkLog` - Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getReportPkLogLogId` - Get a report schedule log
* `getReportRelatedColumnName`
* `getSavedQuery` - Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `getSavedQueryDistinctColumnName`
* `getSavedQueryExport` - Exports multiple saved queries and downloads them as YAML files
* `getSavedQueryInfo` - Get metadata information about this API resource
* `getSavedQueryPk` - Get a saved query
* `getSavedQueryRelatedColumnName`
* `getSecurityCsrfToken` - Fetch the CSRF token
* `postAnnotationLayer` - Create an Annotation layer
* `postAnnotationLayerPkAnnotation` - Create an Annotation layer
* `postCachekeyInvalidate` - Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records
* `postChart` - Create a new Chart.
* `postChartData` - Takes a query context constructed in the client and returns payload data response for the given query.
* `postChartImport`
* `postCssTemplate` - Create a CSS template
* `postDashboard` - Create a new Dashboard.
* `postDashboardImport`
* `postDatabase` - Create a new Database.
* `postDatabaseImport`
* `postDatabaseTestConnection` - Tests a database connection
* `postDatabaseValidateParameters` - Validates parameters used to connect to a database
* `postDataset` - Create a new Dataset
* `postDatasetImport`
* `postLog`
* `postReport` - Create a report schedule
* `postSavedQuery` - Create a saved query
* `postSavedQueryImport`
* `postSecurityLogin` - Authenticate and get a JWT access and refresh token
* `postSecurityRefresh` - Use the refresh token to get a new JWT access token
* `putAnnotationLayerPk` - Update an Annotation layer
* `putAnnotationLayerPkAnnotationAnnotationId` - Update an Annotation layer
* `putChartPk` - Changes a Chart.
* `putCssTemplatePk` - Update a CSS template
* `putDashboardPk` - Changes a Dashboard.
* `putDatabasePk` - Changes a Database.
* `putDatasetPk` - Changes a Dataset
* `putDatasetPkRefresh` - Refreshes and updates columns of a dataset
* `putReportPk` - Update a report schedule
* `putSavedQueryPk` - Update a saved query

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
