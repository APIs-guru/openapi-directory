package shared

import (
	"time"
)

type QueryRestAPIGetList struct {
	ChangedOn    *time.Time   `json:"changed_on"`
	Database     Meta27       `json:"database"`
	EndTime      *float64     `json:"end_time"`
	ExecutedSQL  *string      `json:"executed_sql"`
	ID           *int32       `json:"id"`
	Rows         *int32       `json:"rows"`
	Schema       *string      `json:"schema"`
	SQL          *string      `json:"sql"`
	SQLTables    *interface{} `json:"sql_tables"`
	StartTime    *float64     `json:"start_time"`
	Status       *string      `json:"status"`
	TabName      *string      `json:"tab_name"`
	TmpTableName *string      `json:"tmp_table_name"`
	TrackingURL  *string      `json:"tracking_url"`
	User         *Meta26      `json:"user"`
}
