package shared

import (
	"time"
)

type SavedQueryRestAPIGetList struct {
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized,omitempty"`
	CreatedBy               *Meta29      `json:"created_by,omitempty"`
	CreatedOn               *time.Time   `json:"created_on,omitempty"`
	Database                *Meta30      `json:"database,omitempty"`
	DbID                    *int32       `json:"db_id,omitempty"`
	Description             *string      `json:"description,omitempty"`
	Extra                   *interface{} `json:"extra,omitempty"`
	ID                      *int32       `json:"id,omitempty"`
	Label                   *string      `json:"label,omitempty"`
	LastRunDeltaHumanized   *interface{} `json:"last_run_delta_humanized,omitempty"`
	Rows                    *int32       `json:"rows,omitempty"`
	Schema                  *string      `json:"schema,omitempty"`
	SQL                     *string      `json:"sql,omitempty"`
	SQLTables               *interface{} `json:"sql_tables,omitempty"`
}
