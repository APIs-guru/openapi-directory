package shared

import (
	"time"
)

type VerifyV2ServiceEntityFactor struct {
	AccountSid   *string                       `json:"account_sid"`
	Config       *interface{}                  `json:"config"`
	DateCreated  *time.Time                    `json:"date_created"`
	DateUpdated  *time.Time                    `json:"date_updated"`
	EntitySid    *string                       `json:"entity_sid"`
	FactorType   *FactorEnumFactorTypesEnum    `json:"factor_type"`
	FriendlyName *string                       `json:"friendly_name"`
	Identity     *string                       `json:"identity"`
	Metadata     *interface{}                  `json:"metadata"`
	ServiceSid   *string                       `json:"service_sid"`
	Sid          *string                       `json:"sid"`
	Status       *FactorEnumFactorStatusesEnum `json:"status"`
	URL          *string                       `json:"url"`
}
