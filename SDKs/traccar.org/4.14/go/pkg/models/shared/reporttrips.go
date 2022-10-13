package shared

import (
	"time"
)

type ReportTrips struct {
	AverageSpeed   *float64   `json:"averageSpeed"`
	DeviceID       *int64     `json:"deviceId"`
	DeviceName     *string    `json:"deviceName"`
	Distance       *float64   `json:"distance"`
	DriverName     *string    `json:"driverName"`
	DriverUniqueID *int64     `json:"driverUniqueId"`
	Duration       *int64     `json:"duration"`
	EndAddress     *string    `json:"endAddress"`
	EndLat         *float64   `json:"endLat"`
	EndLon         *float64   `json:"endLon"`
	EndTime        *time.Time `json:"endTime"`
	MaxSpeed       *float64   `json:"maxSpeed"`
	SpentFuel      *float64   `json:"spentFuel"`
	StartAddress   *string    `json:"startAddress"`
	StartLat       *float64   `json:"startLat"`
	StartLon       *float64   `json:"startLon"`
	StartTime      *time.Time `json:"startTime"`
}
