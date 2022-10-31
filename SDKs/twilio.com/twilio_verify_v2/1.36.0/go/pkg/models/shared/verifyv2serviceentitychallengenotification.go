package shared

import (
	"time"
)

type VerifyV2ServiceEntityChallengeNotification struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	ChallengeSid *string    `json:"challenge_sid,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	EntitySid    *string    `json:"entity_sid,omitempty"`
	Identity     *string    `json:"identity,omitempty"`
	Priority     *string    `json:"priority,omitempty"`
	ServiceSid   *string    `json:"service_sid,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	TTL          *int64     `json:"ttl,omitempty"`
}
