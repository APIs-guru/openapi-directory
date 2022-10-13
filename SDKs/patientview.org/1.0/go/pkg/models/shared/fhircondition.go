package shared

import (
	"time"
)

type FhirCondition struct {
	Asserter        *string    `json:"asserter"`
	Category        *string    `json:"category"`
	Code            *string    `json:"code"`
	Date            *time.Time `json:"date"`
	Description     *string    `json:"description"`
	FullDescription *string    `json:"fullDescription"`
	Group           *Group     `json:"group"`
	ID              *int64     `json:"id"`
	Identifier      *string    `json:"identifier"`
	Links           []Link     `json:"links"`
	Notes           *string    `json:"notes"`
	Severity        *string    `json:"severity"`
	Status          *string    `json:"status"`
}
