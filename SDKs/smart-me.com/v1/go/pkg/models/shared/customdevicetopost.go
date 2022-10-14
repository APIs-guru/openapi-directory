package shared

import (
	"time"
)

type CustomDeviceToPost struct {
	ID        *string              `json:"Id,omitempty"`
	Name      *string              `json:"Name,omitempty"`
	Serial    *int64               `json:"Serial,omitempty"`
	ValueDate *time.Time           `json:"ValueDate,omitempty"`
	Values    []CustomDeviceValues `json:"Values,omitempty"`
}
