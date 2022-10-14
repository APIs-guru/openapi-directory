package shared

import (
	"time"
)

type ReportStops struct {
	Address     *string    `json:"address,omitempty"`
	DeviceID    *int64     `json:"deviceId,omitempty"`
	DeviceName  *string    `json:"deviceName,omitempty"`
	Duration    *int64     `json:"duration,omitempty"`
	EndTime     *time.Time `json:"endTime,omitempty"`
	EngineHours *int64     `json:"engineHours,omitempty"`
	Lat         *float64   `json:"lat,omitempty"`
	Lon         *float64   `json:"lon,omitempty"`
	SpentFuel   *float64   `json:"spentFuel,omitempty"`
	StartTime   *time.Time `json:"startTime,omitempty"`
}
