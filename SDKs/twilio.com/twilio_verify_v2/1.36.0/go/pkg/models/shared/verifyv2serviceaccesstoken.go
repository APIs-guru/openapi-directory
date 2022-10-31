package shared

import (
	"time"
)

type VerifyV2ServiceAccessToken struct {
	AccountSid         *string                         `json:"account_sid,omitempty"`
	DateCreated        *time.Time                      `json:"date_created,omitempty"`
	EntityIdentity     *string                         `json:"entity_identity,omitempty"`
	FactorFriendlyName *string                         `json:"factor_friendly_name,omitempty"`
	FactorType         *AccessTokenEnumFactorTypesEnum `json:"factor_type,omitempty"`
	ServiceSid         *string                         `json:"service_sid,omitempty"`
	Sid                *string                         `json:"sid,omitempty"`
	Token              *string                         `json:"token,omitempty"`
	TTL                *int64                          `json:"ttl,omitempty"`
	URL                *string                         `json:"url,omitempty"`
}
