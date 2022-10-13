package shared

import (
	"time"
)

type FhirObservation struct {
	Applies       *time.Time `json:"applies"`
	BodySite      *string    `json:"bodySite"`
	Comments      *string    `json:"comments"`
	Comparator    *string    `json:"comparator"`
	Diagram       *string    `json:"diagram"`
	Group         *Group     `json:"group"`
	ID            *int64     `json:"id"`
	Identifier    *string    `json:"identifier"`
	Location      *string    `json:"location"`
	Name          *string    `json:"name"`
	TemporaryUUID *string    `json:"temporaryUuid"`
	Units         *string    `json:"units"`
	Value         *string    `json:"value"`
}
