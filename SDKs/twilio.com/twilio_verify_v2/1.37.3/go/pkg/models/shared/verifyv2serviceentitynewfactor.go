package shared

import (
	"time"
)

type VerifyV2ServiceEntityNewFactor struct {
	AccountSid   *string                          `json:"account_sid,omitempty"`
	Binding      *interface{}                     `json:"binding,omitempty"`
	Config       *interface{}                     `json:"config,omitempty"`
	DateCreated  *time.Time                       `json:"date_created,omitempty"`
	DateUpdated  *time.Time                       `json:"date_updated,omitempty"`
	EntitySid    *string                          `json:"entity_sid,omitempty"`
	FactorType   *NewFactorEnumFactorTypesEnum    `json:"factor_type,omitempty"`
	FriendlyName *string                          `json:"friendly_name,omitempty"`
	Identity     *string                          `json:"identity,omitempty"`
	Metadata     *interface{}                     `json:"metadata,omitempty"`
	ServiceSid   *string                          `json:"service_sid,omitempty"`
	Sid          *string                          `json:"sid,omitempty"`
	Status       *NewFactorEnumFactorStatusesEnum `json:"status,omitempty"`
	URL          *string                          `json:"url,omitempty"`
}
