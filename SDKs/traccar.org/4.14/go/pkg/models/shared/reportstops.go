package shared

import (
	"time"
)

type ReportStops struct {
	Address     *string    `json:"address"`
	DeviceID    *int64     `json:"deviceId"`
	DeviceName  *string    `json:"deviceName"`
	Duration    *int64     `json:"duration"`
	EndTime     *time.Time `json:"endTime"`
	EngineHours *int64     `json:"engineHours"`
	Lat         *float64   `json:"lat"`
	Lon         *float64   `json:"lon"`
	SpentFuel   *float64   `json:"spentFuel"`
	StartTime   *time.Time `json:"startTime"`
}
