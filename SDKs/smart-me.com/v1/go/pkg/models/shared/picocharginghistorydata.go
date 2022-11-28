package shared

import (
	"time"
)

// PicoChargingHistoryData
// Api container for the charging station history
type PicoChargingHistoryData struct {
	Duration   *int32     `json:"Duration,omitempty"`
	EnergyUsed *float64   `json:"EnergyUsed,omitempty"`
	StartTime  *time.Time `json:"StartTime,omitempty"`
}
