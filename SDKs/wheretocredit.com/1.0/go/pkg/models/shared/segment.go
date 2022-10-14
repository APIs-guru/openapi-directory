package shared

import (
	"time"
)

type Segment struct {
	BookingClass     string     `json:"bookingClass"`
	Carrier          string     `json:"carrier"`
	Departure        *time.Time `json:"departure,omitempty"`
	Destination      string     `json:"destination"`
	Distance         *float64   `json:"distance,omitempty"`
	FlightNumber     *int32     `json:"flightNumber,omitempty"`
	OperatingCarrier *string    `json:"operatingCarrier,omitempty"`
	Origin           string     `json:"origin"`
}
