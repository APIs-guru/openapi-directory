package shared

import (
	"time"
)

type ReportExecutionLogRestAPIGet struct {
	EndDttm       *time.Time `json:"end_dttm,omitempty"`
	ErrorMessage  *string    `json:"error_message,omitempty"`
	ID            *int32     `json:"id,omitempty"`
	ScheduledDttm time.Time  `json:"scheduled_dttm"`
	StartDttm     *time.Time `json:"start_dttm,omitempty"`
	State         string     `json:"state"`
	UUID          *string    `json:"uuid,omitempty"`
	Value         *float32   `json:"value,omitempty"`
	ValueRowJSON  *string    `json:"value_row_json,omitempty"`
}
