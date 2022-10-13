package shared

import (
	"time"
)

type FhirPatient struct {
	Address1          *string            `json:"address1"`
	Address2          *string            `json:"address2"`
	Address3          *string            `json:"address3"`
	Address4          *string            `json:"address4"`
	Contacts          []FhirContact      `json:"contacts"`
	DateOfBirth       *time.Time         `json:"dateOfBirth"`
	DateOfBirthNoTime *string            `json:"dateOfBirthNoTime"`
	Forename          *string            `json:"forename"`
	Gender            *string            `json:"gender"`
	Group             *Group             `json:"group"`
	GroupCode         *string            `json:"groupCode"`
	Identifier        *string            `json:"identifier"`
	Identifiers       []FhirIdentifier   `json:"identifiers"`
	Postcode          *string            `json:"postcode"`
	Practitioners     []FhirPractitioner `json:"practitioners"`
	Surname           *string            `json:"surname"`
}
