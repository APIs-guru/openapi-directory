package shared

import (
	"time"
)

type EarlyDayMotion struct {
	DateTabled    *time.Time `json:"dateTabled"`
	ID            *int32     `json:"id"`
	IsAmendment   *bool      `json:"isAmendment"`
	IsPrayer      *bool      `json:"isPrayer"`
	Number        *string    `json:"number"`
	SponsorsCount *int32     `json:"sponsorsCount"`
	Title         *string    `json:"title"`
}
