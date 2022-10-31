package shared

import (
"time")

type QueryRestAPIGet struct {
    ChangedOn *time.Time `json:"changed_on,omitempty"`
    ClientID string `json:"client_id"`
    Database Meta28 `json:"database"`
    EndResultBackendTime *float64 `json:"end_result_backend_time,omitempty"`
    EndTime *float64 `json:"end_time,omitempty"`
    ErrorMessage *string `json:"error_message,omitempty"`
    ExecutedSQL *string `json:"executed_sql,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Limit *int32 `json:"limit,omitempty"`
    Progress *int32 `json:"progress,omitempty"`
    ResultsKey *string `json:"results_key,omitempty"`
    Rows *int32 `json:"rows,omitempty"`
    Schema *string `json:"schema,omitempty"`
    SelectAsCta *bool `json:"select_as_cta,omitempty"`
    SelectAsCtaUsed *bool `json:"select_as_cta_used,omitempty"`
    SelectSQL *string `json:"select_sql,omitempty"`
    SQL *string `json:"sql,omitempty"`
    SQLEditorID *string `json:"sql_editor_id,omitempty"`
    StartRunningTime *float64 `json:"start_running_time,omitempty"`
    StartTime *float64 `json:"start_time,omitempty"`
    Status *string `json:"status,omitempty"`
    TabName *string `json:"tab_name,omitempty"`
    TmpSchemaName *string `json:"tmp_schema_name,omitempty"`
    TmpTableName *string `json:"tmp_table_name,omitempty"`
    TrackingURL *string `json:"tracking_url,omitempty"`
    
}

