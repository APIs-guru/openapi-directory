package shared

import (
	"time"
)

type AccountsV1AuthTokenPromotion struct {
	AccountSid  *string    `json:"account_sid"`
	AuthToken   *string    `json:"auth_token"`
	DateCreated *time.Time `json:"date_created"`
	DateUpdated *time.Time `json:"date_updated"`
	URL         *string    `json:"url"`
}
