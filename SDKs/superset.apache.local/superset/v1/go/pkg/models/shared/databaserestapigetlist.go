package shared

import (
"time")

type DatabaseRestAPIGetList struct {
    AllowCsvUpload *bool `json:"allow_csv_upload,omitempty"`
    AllowCtas *bool `json:"allow_ctas,omitempty"`
    AllowCvas *bool `json:"allow_cvas,omitempty"`
    AllowDml *bool `json:"allow_dml,omitempty"`
    AllowMultiSchemaMetadataFetch *bool `json:"allow_multi_schema_metadata_fetch,omitempty"`
    AllowRunAsync *bool `json:"allow_run_async,omitempty"`
    AllowsCostEstimate *interface{} `json:"allows_cost_estimate,omitempty"`
    AllowsSubquery *interface{} `json:"allows_subquery,omitempty"`
    AllowsVirtualTableExplore *interface{} `json:"allows_virtual_table_explore,omitempty"`
    Backend *interface{} `json:"backend,omitempty"`
    ChangedOn *time.Time `json:"changed_on,omitempty"`
    ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
    CreatedBy *Meta18 `json:"created_by,omitempty"`
    DatabaseName string `json:"database_name"`
    ExploreDatabaseID *interface{} `json:"explore_database_id,omitempty"`
    ExposeInSqllab *bool `json:"expose_in_sqllab,omitempty"`
    Extra *string `json:"extra,omitempty"`
    ForceCtasSchema *string `json:"force_ctas_schema,omitempty"`
    ID *int32 `json:"id,omitempty"`
    
}

