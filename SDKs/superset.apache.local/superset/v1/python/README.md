# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DeleteAnnotationLayerRequest(
    security=operations.DeleteAnnotationLayerSecurity(
        jwt=shared.SchemeJwt(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    ),
    query_params=operations.DeleteAnnotationLayerQueryParams(
        q=[
            7294065593462764783,
        ],
    ),
)
    
res = s.sdk.delete_annotation_layer_(req)

if res.delete_annotation_layer_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `delete_annotation_layer_` - Deletes multiple annotation layers in a bulk operation.
* `delete_annotation_layer_pk_` - Delete Annotation layer
* `delete_annotation_layer_pk_annotation_` - Deletes multiple annotation in a bulk operation.
* `delete_annotation_layer_pk_annotation_annotation_id_` - Delete Annotation layer
* `delete_chart_` - Deletes multiple Charts in a bulk operation.
* `delete_chart_pk_` - Deletes a Chart.
* `delete_css_template_` - Deletes multiple css templates in a bulk operation.
* `delete_css_template_pk_` - Delete CSS template
* `delete_dashboard_` - Deletes multiple Dashboards in a bulk operation.
* `delete_dashboard_pk_` - Deletes a Dashboard.
* `delete_database_pk_` - Deletes a Database.
* `delete_dataset_` - Deletes multiple Datasets in a bulk operation.
* `delete_dataset_pk_` - Deletes a Dataset
* `delete_dataset_pk_column_column_id_` - Delete a Dataset column
* `delete_dataset_pk_metric_metric_id_` - Delete a Dataset metric
* `delete_report_` - Deletes multiple report schedules in a bulk operation.
* `delete_report_pk_` - Delete a report schedule
* `delete_saved_query_` - Deletes multiple saved queries in a bulk operation.
* `delete_saved_query_pk_` - Delete saved query
* `get_annotation_layer_` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_annotation_layer_info` - Get metadata information about this API resource
* `get_annotation_layer_pk_` - Get an Annotation layer
* `get_annotation_layer_pk_annotation_` - Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_annotation_layer_pk_annotation_annotation_id_` - Get an Annotation layer
* `get_annotation_layer_related_column_name_`
* `get_async_event_` - Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.
* `get_chart_` - Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `get_chart_data_cache_key_` - Takes a query context cache key and returns payload data response for the given query.
* `get_chart_export_` - Exports multiple charts and downloads them as YAML files
* `get_chart_favorite_status_` - Check favorited dashboards for current user
* `get_chart_info` - Several metadata information about chart API endpoints.
* `get_chart_pk_` - Get a chart detail information.
* `get_chart_pk_cache_screenshot_` - Compute and cache a screenshot.
* `get_chart_pk_data_` - Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.
* `get_chart_pk_screenshot_digest_` - Get a computed screenshot from cache.
* `get_chart_pk_thumbnail_digest_` - Compute or get already computed chart thumbnail from cache.
* `get_chart_related_column_name_` - Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter
* `get_css_template_` - Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_css_template_info` - Get metadata information about this API resource
* `get_css_template_pk_` - Get a CSS template
* `get_css_template_related_column_name_`
* `get_dashboard_` - Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `get_dashboard_export_` - Exports multiple Dashboards and downloads them as YAML files.
* `get_dashboard_favorite_status_` - Check favorited dashboards for current user
* `get_dashboard_id_or_slug_` - Get a dashboard detail information.
* `get_dashboard_id_or_slug_charts` - Get the chart definitions for a given dashboard
* `get_dashboard_id_or_slug_datasets` - Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.
* `get_dashboard_info` - Several metadata information about dashboard API endpoints.
* `get_dashboard_pk_thumbnail_digest_` - Compute async or get already computed dashboard thumbnail from cache.
* `get_dashboard_related_column_name_` - Get a list of all possible owners for a dashboard.
* `get_database_` - Get a list of models
* `get_database_available_` - Get names of databases currently available
* `get_database_export_` - Download database(s) and associated dataset(s) as a zip file
* `get_database_info` - Get metadata information about this API resource
* `get_database_pk_` - Get an item model
* `get_database_pk_function_names_` - Get function names supported by a database
* `get_database_pk_related_objects_` - Get charts and dashboards count associated to a database
* `get_database_pk_schemas_` - Get all schemas from a database
* `get_database_pk_select_star_table_name_` - Get database select star for table
* `get_database_pk_select_star_table_name_schema_name_` - Get database select star for table
* `get_database_pk_table_table_name_schema_name_` - Get database table metadata
* `get_dataset_` - Get a list of models
* `get_dataset_distinct_column_name_`
* `get_dataset_export_` - Exports multiple datasets and downloads them as YAML files
* `get_dataset_info` - Get metadata information about this API resource
* `get_dataset_pk_` - Get an item model
* `get_dataset_pk_related_objects` - Get charts and dashboards count associated to a dataset
* `get_dataset_related_column_name_`
* `get_log_` - Get a list of models
* `get_log_pk_` - Get an item model
* `get_menu_` - Get the menu data structure. Returns a forest like structure with the menu the user has access to
* `get_openapi_version_openapi` - Get the OpenAPI spec for a specific API version
* `get_query_` - Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
* `get_query_distinct_column_name_`
* `get_query_pk_` - Get query detail information.
* `get_query_related_column_name_`
* `get_report_` - Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_report_info` - Get metadata information about this API resource
* `get_report_pk_` - Get a report schedule
* `get_report_pk_log_` - Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_report_pk_log_log_id_` - Get a report schedule log
* `get_report_related_column_name_`
* `get_saved_query_` - Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
* `get_saved_query_distinct_column_name_`
* `get_saved_query_export_` - Exports multiple saved queries and downloads them as YAML files
* `get_saved_query_info` - Get metadata information about this API resource
* `get_saved_query_pk_` - Get a saved query
* `get_saved_query_related_column_name_`
* `get_security_csrf_token_` - Fetch the CSRF token
* `post_annotation_layer_` - Create an Annotation layer
* `post_annotation_layer_pk_annotation_` - Create an Annotation layer
* `post_cachekey_invalidate` - Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records
* `post_chart_` - Create a new Chart.
* `post_chart_data` - Takes a query context constructed in the client and returns payload data response for the given query.
* `post_chart_import_`
* `post_css_template_` - Create a CSS template
* `post_dashboard_` - Create a new Dashboard.
* `post_dashboard_import_`
* `post_database_` - Create a new Database.
* `post_database_import_`
* `post_database_test_connection` - Tests a database connection
* `post_database_validate_parameters` - Validates parameters used to connect to a database
* `post_dataset_` - Create a new Dataset
* `post_dataset_import_`
* `post_log_`
* `post_report_` - Create a report schedule
* `post_saved_query_` - Create a saved query
* `post_saved_query_import_`
* `post_security_login` - Authenticate and get a JWT access and refresh token
* `post_security_refresh` - Use the refresh token to get a new JWT access token
* `put_annotation_layer_pk_` - Update an Annotation layer
* `put_annotation_layer_pk_annotation_annotation_id_` - Update an Annotation layer
* `put_chart_pk_` - Changes a Chart.
* `put_css_template_pk_` - Update a CSS template
* `put_dashboard_pk_` - Changes a Dashboard.
* `put_database_pk_` - Changes a Database.
* `put_dataset_pk_` - Changes a Dataset
* `put_dataset_pk_refresh` - Refreshes and updates columns of a dataset
* `put_report_pk_` - Update a report schedule
* `put_saved_query_pk_` - Update a saved query

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
