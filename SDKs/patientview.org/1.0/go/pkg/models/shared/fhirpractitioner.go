package shared

import (
"time")

type FhirPractitioner struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    Address3 *string `json:"address3,omitempty"`
    Address4 *string `json:"address4,omitempty"`
    AllowInviteGp *bool `json:"allowInviteGp,omitempty"`
    Contacts []FhirContact `json:"contacts,omitempty"`
    Gender *string `json:"gender,omitempty"`
    GroupCode *string `json:"groupCode,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    InviteDate *time.Time `json:"inviteDate,omitempty"`
    Name *string `json:"name,omitempty"`
    Postcode *string `json:"postcode,omitempty"`
    Role *string `json:"role,omitempty"`
    
}

