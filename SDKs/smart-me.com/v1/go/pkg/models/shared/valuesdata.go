package shared

import (
	"time"
)

type ValuesData struct {
	Date     *time.Time  `json:"Date"`
	DeviceID *string     `json:"DeviceId"`
	Values   []ValueData `json:"Values"`
}
