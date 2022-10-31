package shared

import (
"time")

type ReportTrips struct {
    AverageSpeed *float64 `json:"averageSpeed,omitempty"`
    DeviceID *int64 `json:"deviceId,omitempty"`
    DeviceName *string `json:"deviceName,omitempty"`
    Distance *float64 `json:"distance,omitempty"`
    DriverName *string `json:"driverName,omitempty"`
    DriverUniqueID *int64 `json:"driverUniqueId,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    EndAddress *string `json:"endAddress,omitempty"`
    EndLat *float64 `json:"endLat,omitempty"`
    EndLon *float64 `json:"endLon,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    MaxSpeed *float64 `json:"maxSpeed,omitempty"`
    SpentFuel *float64 `json:"spentFuel,omitempty"`
    StartAddress *string `json:"startAddress,omitempty"`
    StartLat *float64 `json:"startLat,omitempty"`
    StartLon *float64 `json:"startLon,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    
}

