package shared

import (
	"time"
)

type PicoChargingHistoryData struct {
	Duration   *int32     `json:"Duration"`
	EnergyUsed *float64   `json:"EnergyUsed"`
	StartTime  *time.Time `json:"StartTime"`
}
