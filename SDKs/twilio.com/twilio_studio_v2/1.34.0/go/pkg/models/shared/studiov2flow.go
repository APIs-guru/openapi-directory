package shared

import (
	"time"
)

type StudioV2Flow struct {
	AccountSid    *string                `json:"account_sid"`
	CommitMessage *string                `json:"commit_message"`
	DateCreated   *time.Time             `json:"date_created"`
	DateUpdated   *time.Time             `json:"date_updated"`
	Definition    *interface{}           `json:"definition"`
	Errors        []interface{}          `json:"errors"`
	FriendlyName  *string                `json:"friendly_name"`
	Links         map[string]interface{} `json:"links"`
	Revision      *int64                 `json:"revision"`
	Sid           *string                `json:"sid"`
	Status        *FlowEnumStatusEnum    `json:"status"`
	URL           *string                `json:"url"`
	Valid         *bool                  `json:"valid"`
	Warnings      []interface{}          `json:"warnings"`
	WebhookURL    *string                `json:"webhook_url"`
}
