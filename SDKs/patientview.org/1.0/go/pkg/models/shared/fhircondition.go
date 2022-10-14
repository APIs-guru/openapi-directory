package shared

import (
	"time"
)

type FhirCondition struct {
	Asserter        *string    `json:"asserter,omitempty"`
	Category        *string    `json:"category,omitempty"`
	Code            *string    `json:"code,omitempty"`
	Date            *time.Time `json:"date,omitempty"`
	Description     *string    `json:"description,omitempty"`
	FullDescription *string    `json:"fullDescription,omitempty"`
	Group           *Group     `json:"group,omitempty"`
	ID              *int64     `json:"id,omitempty"`
	Identifier      *string    `json:"identifier,omitempty"`
	Links           []Link     `json:"links,omitempty"`
	Notes           *string    `json:"notes,omitempty"`
	Severity        *string    `json:"severity,omitempty"`
	Status          *string    `json:"status,omitempty"`
}
