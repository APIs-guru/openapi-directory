package shared

import (
	"time"
)

type TrusthubV1CustomerProfile struct {
	AccountSid     *string                        `json:"account_sid"`
	DateCreated    *time.Time                     `json:"date_created"`
	DateUpdated    *time.Time                     `json:"date_updated"`
	Email          *string                        `json:"email"`
	FriendlyName   *string                        `json:"friendly_name"`
	Links          map[string]interface{}         `json:"links"`
	PolicySid      *string                        `json:"policy_sid"`
	Sid            *string                        `json:"sid"`
	Status         *CustomerProfileEnumStatusEnum `json:"status"`
	StatusCallback *string                        `json:"status_callback"`
	URL            *string                        `json:"url"`
	ValidUntil     *time.Time                     `json:"valid_until"`
}
