package shared

import (
	"time"
)

type EndDates struct {
	Approximate *bool      `json:"approximate"`
	DateTime    *time.Time `json:"dateTime"`
	LocalTime   *LocalTime `json:"localTime"`
}
