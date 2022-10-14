package shared

import (
	"time"
)

type QueryRestAPIGetList struct {
	ChangedOn    *time.Time   `json:"changed_on,omitempty"`
	Database     Meta27       `json:"database"`
	EndTime      *float64     `json:"end_time,omitempty"`
	ExecutedSQL  *string      `json:"executed_sql,omitempty"`
	ID           *int32       `json:"id,omitempty"`
	Rows         *int32       `json:"rows,omitempty"`
	Schema       *string      `json:"schema,omitempty"`
	SQL          *string      `json:"sql,omitempty"`
	SQLTables    *interface{} `json:"sql_tables,omitempty"`
	StartTime    *float64     `json:"start_time,omitempty"`
	Status       *string      `json:"status,omitempty"`
	TabName      *string      `json:"tab_name,omitempty"`
	TmpTableName *string      `json:"tmp_table_name,omitempty"`
	TrackingURL  *string      `json:"tracking_url,omitempty"`
	User         *Meta26      `json:"user,omitempty"`
}
