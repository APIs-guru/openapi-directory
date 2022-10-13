package shared

import (
	"time"
)

type V3VehiclePosition struct {
	Bearing     *float64   `json:"bearing"`
	DatetimeUtc *time.Time `json:"datetime_utc"`
	Direction   *string    `json:"direction"`
	Easting     *float64   `json:"easting"`
	ExpiryTime  *time.Time `json:"expiry_time"`
	Latitude    *float64   `json:"latitude"`
	Longitude   *float64   `json:"longitude"`
	Northing    *float64   `json:"northing"`
	Supplier    *string    `json:"supplier"`
}
