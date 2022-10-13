package shared

import (
	"time"
)

type Meta25 struct {
	ChangedOn   *time.Time `json:"changed_on"`
	CreatedOn   *time.Time `json:"created_on"`
	D3format    *string    `json:"d3format"`
	Description *string    `json:"description"`
	Expression  string     `json:"expression"`
	Extra       *string    `json:"extra"`
	ID          *int32     `json:"id"`
	MetricName  string     `json:"metric_name"`
	MetricType  *string    `json:"metric_type"`
	UUID        *string    `json:"uuid"`
	VerboseName *string    `json:"verbose_name"`
	WarningText *string    `json:"warning_text"`
}
