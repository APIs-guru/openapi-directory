package shared

import (
	"time"
)

type SavedQueryRestAPIGetList struct {
	ChangedOnDeltaHumanized *interface{} `json:"changed_on_delta_humanized"`
	CreatedBy               *Meta29      `json:"created_by"`
	CreatedOn               *time.Time   `json:"created_on"`
	Database                *Meta30      `json:"database"`
	DbID                    *int32       `json:"db_id"`
	Description             *string      `json:"description"`
	Extra                   *interface{} `json:"extra"`
	ID                      *int32       `json:"id"`
	Label                   *string      `json:"label"`
	LastRunDeltaHumanized   *interface{} `json:"last_run_delta_humanized"`
	Rows                    *int32       `json:"rows"`
	Schema                  *string      `json:"schema"`
	SQL                     *string      `json:"sql"`
	SQLTables               *interface{} `json:"sql_tables"`
}
