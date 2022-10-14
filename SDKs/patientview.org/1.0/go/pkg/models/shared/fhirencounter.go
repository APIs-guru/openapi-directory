package shared

import (
	"time"
)

type FhirEncounter struct {
	Date          *time.Time        `json:"date,omitempty"`
	EncounterType *string           `json:"encounterType,omitempty"`
	Group         *Group            `json:"group,omitempty"`
	ID            *int64            `json:"id,omitempty"`
	Identifier    *string           `json:"identifier,omitempty"`
	Links         []Link            `json:"links,omitempty"`
	Observations  []FhirObservation `json:"observations,omitempty"`
	Procedures    []FhirProcedure   `json:"procedures,omitempty"`
	Status        *string           `json:"status,omitempty"`
}
