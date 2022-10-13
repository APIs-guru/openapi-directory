package shared

import (
	"time"
)

type ReportExecutionLogRestAPIGet struct {
	EndDttm       *time.Time `json:"end_dttm"`
	ErrorMessage  *string    `json:"error_message"`
	ID            *int32     `json:"id"`
	ScheduledDttm time.Time  `json:"scheduled_dttm"`
	StartDttm     *time.Time `json:"start_dttm"`
	State         string     `json:"state"`
	UUID          *string    `json:"uuid"`
	Value         *float32   `json:"value"`
	ValueRowJSON  *string    `json:"value_row_json"`
}
