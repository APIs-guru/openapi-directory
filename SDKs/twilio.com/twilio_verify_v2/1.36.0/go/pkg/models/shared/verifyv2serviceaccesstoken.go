package shared

import (
	"time"
)

type VerifyV2ServiceAccessToken struct {
	AccountSid         *string                         `json:"account_sid"`
	DateCreated        *time.Time                      `json:"date_created"`
	EntityIdentity     *string                         `json:"entity_identity"`
	FactorFriendlyName *string                         `json:"factor_friendly_name"`
	FactorType         *AccessTokenEnumFactorTypesEnum `json:"factor_type"`
	ServiceSid         *string                         `json:"service_sid"`
	Sid                *string                         `json:"sid"`
	Token              *string                         `json:"token"`
	TTL                *int64                          `json:"ttl"`
	URL                *string                         `json:"url"`
}
