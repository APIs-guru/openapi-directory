package shared

import (
	"time"
)

type Segment struct {
	BookingClass     string     `json:"bookingClass"`
	Carrier          string     `json:"carrier"`
	Departure        *time.Time `json:"departure"`
	Destination      string     `json:"destination"`
	Distance         *float64   `json:"distance"`
	FlightNumber     *int32     `json:"flightNumber"`
	OperatingCarrier *string    `json:"operatingCarrier"`
	Origin           string     `json:"origin"`
}
