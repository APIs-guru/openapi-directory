package shared

import (
	"time"
)

type ValuesData struct {
	Date     *time.Time  `json:"Date,omitempty"`
	DeviceID *string     `json:"DeviceId,omitempty"`
	Values   []ValueData `json:"Values,omitempty"`
}
