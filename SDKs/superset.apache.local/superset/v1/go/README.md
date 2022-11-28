# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DeleteAnnotationLayerRequest{
        Security: operations.DeleteAnnotationLayerSecurity{
            Jwt: shared.SchemeJwt{
                Authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
            },
        },
        QueryParams: operations.DeleteAnnotationLayerQueryParams{
            Q: []int64{
                7294065593462764783,
            },
        },
    }
    
    res, err := s.Sdk.DeleteAnnotationLayer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAnnotationLayer200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `DeleteAnnotationLayer` - Deletes multiple annotation layers in a bulk operation.
* `DeleteAnnotationLayerPk` - Delete Annotation layer
* `DeleteAnnotationLayerPkAnnotation` - Deletes multiple annotation in a bulk operation.
* `DeleteAnnotationLayerPkAnnotationAnnotationID` - Delete Annotation layer
* `DeleteChart` - Deletes multiple Charts in a bulk operation.
* `DeleteChartPk` - Deletes a Chart.
* `DeleteCSSTemplate` - Deletes multiple css templates in a bulk operation.
* `DeleteCSSTemplatePk` - Delete CSS template
* `DeleteDashboard` - Deletes multiple Dashboards in a bulk operation.
* `DeleteDashboardPk` - Deletes a Dashboard.
* `DeleteDatabasePk` - Deletes a Database.
* `DeleteDataset` - Deletes multiple Datasets in a bulk operation.
* `DeleteDatasetPk` - Deletes a Dataset
* `DeleteDatasetPkColumnColumnID` - Delete a Dataset column
* `DeleteDatasetPkMetricMetricID` - Delete a Dataset metric
* `DeleteReport` - Deletes multiple report schedules in a bulk operation.
* `DeleteReportPk` - Delete a report schedule
* `DeleteSavedQuery` - Deletes multiple saved queries in a bulk operation.
* `DeleteSavedQueryPk` - Delete saved query
* `GetAnnotationLayer` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetAnnotationLayerInfo` - Get metadata information about this API resource
* `GetAnnotationLayerPk` - Get an Annotation layer
* `GetAnnotationLayerPkAnnotation` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetAnnotationLayerPkAnnotationAnnotationID` - Get an Annotation layer
* `GetAnnotationLayerRelatedColumnName`
* `GetAsyncEvent` - Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.
* `GetChart` - Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `GetChartDataCacheKey` - Takes a query context cache key and returns payload data response for the given query.
* `GetChartExport` - Exports multiple charts and downloads them as YAML files
* `GetChartFavoriteStatus` - Check favorited dashboards for current user
* `GetChartInfo` - Several metadata information about chart API endpoints.
* `GetChartPk` - Get a chart detail information.
* `GetChartPkCacheScreenshot` - Compute and cache a screenshot.
* `GetChartPkData` - Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.
* `GetChartPkScreenshotDigest` - Get a computed screenshot from cache.
* `GetChartPkThumbnailDigest` - Compute or get already computed chart thumbnail from cache.
* `GetChartRelatedColumnName` - Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter
* `GetCSSTemplate` - Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetCSSTemplateInfo` - Get metadata information about this API resource
* `GetCSSTemplatePk` - Get a CSS template
* `GetCSSTemplateRelatedColumnName`
* `GetDashboard` - Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `GetDashboardExport` - Exports multiple Dashboards and downloads them as YAML files.
* `GetDashboardFavoriteStatus` - Check favorited dashboards for current user
* `GetDashboardIDOrSlug` - Get a dashboard detail information.
* `GetDashboardIDOrSlugCharts` - Get the chart definitions for a given dashboard
* `GetDashboardIDOrSlugDatasets` - Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.
* `GetDashboardInfo` - Several metadata information about dashboard API endpoints.
* `GetDashboardPkThumbnailDigest` - Compute async or get already computed dashboard thumbnail from cache.
* `GetDashboardRelatedColumnName` - Get a list of all possible owners for a dashboard.
* `GetDatabase` - Get a list of models
* `GetDatabaseAvailable` - Get names of databases currently available
* `GetDatabaseExport` - Download database(s) and associated dataset(s) as a zip file
* `GetDatabaseInfo` - Get metadata information about this API resource
* `GetDatabasePk` - Get an item model
* `GetDatabasePkFunctionNames` - Get function names supported by a database
* `GetDatabasePkRelatedObjects` - Get charts and dashboards count associated to a database
* `GetDatabasePkSchemas` - Get all schemas from a database
* `GetDatabasePkSelectStarTableName` - Get database select star for table
* `GetDatabasePkSelectStarTableNameSchemaName` - Get database select star for table
* `GetDatabasePkTableTableNameSchemaName` - Get database table metadata
* `GetDataset` - Get a list of models
* `GetDatasetDistinctColumnName`
* `GetDatasetExport` - Exports multiple datasets and downloads them as YAML files
* `GetDatasetInfo` - Get metadata information about this API resource
* `GetDatasetPk` - Get an item model
* `GetDatasetPkRelatedObjects` - Get charts and dashboards count associated to a dataset
* `GetDatasetRelatedColumnName`
* `GetLog` - Get a list of models
* `GetLogPk` - Get an item model
* `GetMenu` - Get the menu data structure. Returns a forest like structure with the menu the user has access to
* `GetOpenapiVersionOpenapi` - Get the OpenAPI spec for a specific API version
* `GetQuery` - Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `GetQueryDistinctColumnName`
* `GetQueryPk` - Get query detail information.
* `GetQueryRelatedColumnName`
* `GetReport` - Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetReportInfo` - Get metadata information about this API resource
* `GetReportPk` - Get a report schedule
* `GetReportPkLog` - Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetReportPkLogLogID` - Get a report schedule log
* `GetReportRelatedColumnName`
* `GetSavedQuery` - Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `GetSavedQueryDistinctColumnName`
* `GetSavedQueryExport` - Exports multiple saved queries and downloads them as YAML files
* `GetSavedQueryInfo` - Get metadata information about this API resource
* `GetSavedQueryPk` - Get a saved query
* `GetSavedQueryRelatedColumnName`
* `GetSecurityCsrfToken` - Fetch the CSRF token
* `PostAnnotationLayer` - Create an Annotation layer
* `PostAnnotationLayerPkAnnotation` - Create an Annotation layer
* `PostCachekeyInvalidate` - Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records
* `PostChart` - Create a new Chart.
* `PostChartData` - Takes a query context constructed in the client and returns payload data response for the given query.
* `PostChartImport`
* `PostCSSTemplate` - Create a CSS template
* `PostDashboard` - Create a new Dashboard.
* `PostDashboardImport`
* `PostDatabase` - Create a new Database.
* `PostDatabaseImport`
* `PostDatabaseTestConnection` - Tests a database connection
* `PostDatabaseValidateParameters` - Validates parameters used to connect to a database
* `PostDataset` - Create a new Dataset
* `PostDatasetImport`
* `PostLog`
* `PostReport` - Create a report schedule
* `PostSavedQuery` - Create a saved query
* `PostSavedQueryImport`
* `PostSecurityLogin` - Authenticate and get a JWT access and refresh token
* `PostSecurityRefresh` - Use the refresh token to get a new JWT access token
* `PutAnnotationLayerPk` - Update an Annotation layer
* `PutAnnotationLayerPkAnnotationAnnotationID` - Update an Annotation layer
* `PutChartPk` - Changes a Chart.
* `PutCSSTemplatePk` - Update a CSS template
* `PutDashboardPk` - Changes a Dashboard.
* `PutDatabasePk` - Changes a Database.
* `PutDatasetPk` - Changes a Dataset
* `PutDatasetPkRefresh` - Refreshes and updates columns of a dataset
* `PutReportPk` - Update a report schedule
* `PutSavedQueryPk` - Update a saved query

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
