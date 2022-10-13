package shared

import (
	"time"
)

type VerifyV2ServiceEntityNewFactor struct {
	AccountSid   *string                          `json:"account_sid"`
	Binding      *interface{}                     `json:"binding"`
	Config       *interface{}                     `json:"config"`
	DateCreated  *time.Time                       `json:"date_created"`
	DateUpdated  *time.Time                       `json:"date_updated"`
	EntitySid    *string                          `json:"entity_sid"`
	FactorType   *NewFactorEnumFactorTypesEnum    `json:"factor_type"`
	FriendlyName *string                          `json:"friendly_name"`
	Identity     *string                          `json:"identity"`
	Metadata     *interface{}                     `json:"metadata"`
	ServiceSid   *string                          `json:"service_sid"`
	Sid          *string                          `json:"sid"`
	Status       *NewFactorEnumFactorStatusesEnum `json:"status"`
	URL          *string                          `json:"url"`
}
