package shared

import (
	"time"
)

type ContentV1Content struct {
	AccountSid   *string                `json:"account_sid,omitempty"`
	DateCreated  *time.Time             `json:"date_created,omitempty"`
	DateUpdated  *time.Time             `json:"date_updated,omitempty"`
	FriendlyName *string                `json:"friendly_name,omitempty"`
	Language     *string                `json:"language,omitempty"`
	Links        map[string]interface{} `json:"links,omitempty"`
	Sid          *string                `json:"sid,omitempty"`
	Types        *interface{}           `json:"types,omitempty"`
	URL          *string                `json:"url,omitempty"`
	Variables    *interface{}           `json:"variables,omitempty"`
}
