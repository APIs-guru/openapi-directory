package shared

import (
	"time"
)

type Vote struct {
	ActedAsTeller      *bool      `json:"actedAsTeller,omitempty"`
	Date               *time.Time `json:"date,omitempty"`
	DivisionNumber     *int32     `json:"divisionNumber,omitempty"`
	House              *int32     `json:"house,omitempty"`
	ID                 *int32     `json:"id,omitempty"`
	InAffirmativeLobby *bool      `json:"inAffirmativeLobby,omitempty"`
	NumberAgainst      *int32     `json:"numberAgainst,omitempty"`
	NumberInFavour     *int32     `json:"numberInFavour,omitempty"`
	Title              *string    `json:"title,omitempty"`
}
