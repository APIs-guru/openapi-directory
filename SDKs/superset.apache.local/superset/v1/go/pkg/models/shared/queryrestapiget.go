package shared

import (
	"time"
)

type QueryRestAPIGet struct {
	ChangedOn            *time.Time `json:"changed_on"`
	ClientID             string     `json:"client_id"`
	Database             Meta28     `json:"database"`
	EndResultBackendTime *float64   `json:"end_result_backend_time"`
	EndTime              *float64   `json:"end_time"`
	ErrorMessage         *string    `json:"error_message"`
	ExecutedSQL          *string    `json:"executed_sql"`
	ID                   *int32     `json:"id"`
	Limit                *int32     `json:"limit"`
	Progress             *int32     `json:"progress"`
	ResultsKey           *string    `json:"results_key"`
	Rows                 *int32     `json:"rows"`
	Schema               *string    `json:"schema"`
	SelectAsCta          *bool      `json:"select_as_cta"`
	SelectAsCtaUsed      *bool      `json:"select_as_cta_used"`
	SelectSQL            *string    `json:"select_sql"`
	SQL                  *string    `json:"sql"`
	SQLEditorID          *string    `json:"sql_editor_id"`
	StartRunningTime     *float64   `json:"start_running_time"`
	StartTime            *float64   `json:"start_time"`
	Status               *string    `json:"status"`
	TabName              *string    `json:"tab_name"`
	TmpSchemaName        *string    `json:"tmp_schema_name"`
	TmpTableName         *string    `json:"tmp_table_name"`
	TrackingURL          *string    `json:"tracking_url"`
}
