package shared

import (
	"time"
)

// ValuesData
// API Container for a Meter Value
type ValuesData struct {
	Date     *time.Time  `json:"Date,omitempty"`
	DeviceID *string     `json:"DeviceId,omitempty"`
	Values   []ValueData `json:"Values,omitempty"`
}
