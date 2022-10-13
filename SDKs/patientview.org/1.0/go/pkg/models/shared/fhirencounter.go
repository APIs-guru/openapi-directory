package shared

import (
	"time"
)

type FhirEncounter struct {
	Date          *time.Time        `json:"date"`
	EncounterType *string           `json:"encounterType"`
	Group         *Group            `json:"group"`
	ID            *int64            `json:"id"`
	Identifier    *string           `json:"identifier"`
	Links         []Link            `json:"links"`
	Observations  []FhirObservation `json:"observations"`
	Procedures    []FhirProcedure   `json:"procedures"`
	Status        *string           `json:"status"`
}
