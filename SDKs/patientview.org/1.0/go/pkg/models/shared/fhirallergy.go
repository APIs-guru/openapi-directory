package shared

import (
	"time"
)

type FhirAllergy struct {
	ConfidenceLevel *string
	Group           *Group
	ID              *int64
	Identifier      *string
	InfoSource      *string
	Reaction        *string
	RecordedDate    *time.Time
	Status          *string
	Substance       *string
	Type            *string
}
