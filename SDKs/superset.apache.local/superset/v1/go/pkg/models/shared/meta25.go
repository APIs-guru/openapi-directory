package shared

import (
	"time"
)

type Meta25 struct {
	ChangedOn   *time.Time `json:"changed_on,omitempty"`
	CreatedOn   *time.Time `json:"created_on,omitempty"`
	D3format    *string    `json:"d3format,omitempty"`
	Description *string    `json:"description,omitempty"`
	Expression  string     `json:"expression"`
	Extra       *string    `json:"extra,omitempty"`
	ID          *int32     `json:"id,omitempty"`
	MetricName  string     `json:"metric_name"`
	MetricType  *string    `json:"metric_type,omitempty"`
	UUID        *string    `json:"uuid,omitempty"`
	VerboseName *string    `json:"verbose_name,omitempty"`
	WarningText *string    `json:"warning_text,omitempty"`
}
