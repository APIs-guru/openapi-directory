package shared

import (
	"time"
)

type DatabaseRestAPIGetList struct {
	AllowCsvUpload                *bool        `json:"allow_csv_upload"`
	AllowCtas                     *bool        `json:"allow_ctas"`
	AllowCvas                     *bool        `json:"allow_cvas"`
	AllowDml                      *bool        `json:"allow_dml"`
	AllowMultiSchemaMetadataFetch *bool        `json:"allow_multi_schema_metadata_fetch"`
	AllowRunAsync                 *bool        `json:"allow_run_async"`
	AllowsCostEstimate            *interface{} `json:"allows_cost_estimate"`
	AllowsSubquery                *interface{} `json:"allows_subquery"`
	AllowsVirtualTableExplore     *interface{} `json:"allows_virtual_table_explore"`
	Backend                       *interface{} `json:"backend"`
	ChangedOn                     *time.Time   `json:"changed_on"`
	ChangedOnDeltaHumanized       *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy                     *Meta18      `json:"created_by"`
	DatabaseName                  string       `json:"database_name"`
	ExploreDatabaseID             *interface{} `json:"explore_database_id"`
	ExposeInSqllab                *bool        `json:"expose_in_sqllab"`
	Extra                         *string      `json:"extra"`
	ForceCtasSchema               *string      `json:"force_ctas_schema"`
	ID                            *int32       `json:"id"`
}
