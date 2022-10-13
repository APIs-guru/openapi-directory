package shared

import (
	"time"
)

type MessagingV1ExternalCampaign struct {
	AccountSid          *string    `json:"account_sid"`
	CampaignID          *string    `json:"campaign_id"`
	DateCreated         *time.Time `json:"date_created"`
	MessagingServiceSid *string    `json:"messaging_service_sid"`
	Sid                 *string    `json:"sid"`
}
