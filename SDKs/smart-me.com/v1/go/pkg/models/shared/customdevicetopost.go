package shared

import (
	"time"
)

type CustomDeviceToPost struct {
	ID        *string              `json:"Id"`
	Name      *string              `json:"Name"`
	Serial    *int64               `json:"Serial"`
	ValueDate *time.Time           `json:"ValueDate"`
	Values    []CustomDeviceValues `json:"Values"`
}
