package shared

import (
	"time"
)

type V3VehiclePosition struct {
	Bearing     *float64   `json:"bearing,omitempty"`
	DatetimeUtc *time.Time `json:"datetime_utc,omitempty"`
	Direction   *string    `json:"direction,omitempty"`
	Easting     *float64   `json:"easting,omitempty"`
	ExpiryTime  *time.Time `json:"expiry_time,omitempty"`
	Latitude    *float64   `json:"latitude,omitempty"`
	Longitude   *float64   `json:"longitude,omitempty"`
	Northing    *float64   `json:"northing,omitempty"`
	Supplier    *string    `json:"supplier,omitempty"`
}
