package shared

import (
	"time"
)

type ChangeAlertStatusFilterInfo struct {
	CategoryIds []string   `json:"categoryIds,omitempty"`
	MaxDate     *time.Time `json:"maxDate,omitempty"`
	MinDate     *time.Time `json:"minDate,omitempty"`
	Scope       *int32     `json:"scope,omitempty"`
	TeamIds     []string   `json:"teamIds,omitempty"`
}
