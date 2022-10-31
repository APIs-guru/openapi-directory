package shared

import (
"time")

type FhirPatient struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    Address3 *string `json:"address3,omitempty"`
    Address4 *string `json:"address4,omitempty"`
    Contacts []FhirContact `json:"contacts,omitempty"`
    DateOfBirth *time.Time `json:"dateOfBirth,omitempty"`
    DateOfBirthNoTime *string `json:"dateOfBirthNoTime,omitempty"`
    Forename *string `json:"forename,omitempty"`
    Gender *string `json:"gender,omitempty"`
    Group *Group `json:"group,omitempty"`
    GroupCode *string `json:"groupCode,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Identifiers []FhirIdentifier `json:"identifiers,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    Practitioners []FhirPractitioner `json:"practitioners,omitempty"`
    Surname *string `json:"surname,omitempty"`
    
}

