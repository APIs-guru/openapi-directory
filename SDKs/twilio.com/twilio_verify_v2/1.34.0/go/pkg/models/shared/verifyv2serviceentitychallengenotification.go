package shared

import (
	"time"
)

type VerifyV2ServiceEntityChallengeNotification struct {
	AccountSid   *string    `json:"account_sid"`
	ChallengeSid *string    `json:"challenge_sid"`
	DateCreated  *time.Time `json:"date_created"`
	EntitySid    *string    `json:"entity_sid"`
	Identity     *string    `json:"identity"`
	Priority     *string    `json:"priority"`
	ServiceSid   *string    `json:"service_sid"`
	Sid          *string    `json:"sid"`
	TTL          *int64     `json:"ttl"`
}
