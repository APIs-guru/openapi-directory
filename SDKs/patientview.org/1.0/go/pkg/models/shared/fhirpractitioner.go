package shared

import (
	"time"
)

type FhirPractitioner struct {
	Address1      *string       `json:"address1"`
	Address2      *string       `json:"address2"`
	Address3      *string       `json:"address3"`
	Address4      *string       `json:"address4"`
	AllowInviteGp *bool         `json:"allowInviteGp"`
	Contacts      []FhirContact `json:"contacts"`
	Gender        *string       `json:"gender"`
	GroupCode     *string       `json:"groupCode"`
	Identifier    *string       `json:"identifier"`
	InviteDate    *time.Time    `json:"inviteDate"`
	Name          *string       `json:"name"`
	Postcode      *string       `json:"postcode"`
	Role          *string       `json:"role"`
}
