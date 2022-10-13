package shared

import (
	"time"
)

type VerifyV2ServiceRateLimitBucket struct {
	AccountSid   *string    `json:"account_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	Interval     *int64     `json:"interval"`
	Max          *int64     `json:"max"`
	RateLimitSid *string    `json:"rate_limit_sid"`
	ServiceSid   *string    `json:"service_sid"`
	Sid          *string    `json:"sid"`
	URL          *string    `json:"url"`
}
