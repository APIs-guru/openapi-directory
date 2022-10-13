package shared

import (
	"time"
)

type Vote struct {
	ActedAsTeller      *bool      `json:"actedAsTeller"`
	Date               *time.Time `json:"date"`
	DivisionNumber     *int32     `json:"divisionNumber"`
	House              *int32     `json:"house"`
	ID                 *int32     `json:"id"`
	InAffirmativeLobby *bool      `json:"inAffirmativeLobby"`
	NumberAgainst      *int32     `json:"numberAgainst"`
	NumberInFavour     *int32     `json:"numberInFavour"`
	Title              *string    `json:"title"`
}
