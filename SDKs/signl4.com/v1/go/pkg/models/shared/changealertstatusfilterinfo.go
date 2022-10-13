package shared

import (
	"time"
)

type ChangeAlertStatusFilterInfo struct {
	CategoryIds []string   `json:"categoryIds"`
	MaxDate     *time.Time `json:"maxDate"`
	MinDate     *time.Time `json:"minDate"`
	Scope       *int32     `json:"scope"`
	TeamIds     []string   `json:"teamIds"`
}
