package shared

import (
	"time"
)

type MessagingV1ServiceUsAppToPerson struct {
	AccountSid             *string      `json:"account_sid"`
	BrandRegistrationSid   *string      `json:"brand_registration_sid"`
	CampaignID             *string      `json:"campaign_id"`
	CampaignStatus         *string      `json:"campaign_status"`
	DateCreated            *time.Time   `json:"date_created"`
	DateUpdated            *time.Time   `json:"date_updated"`
	Description            *string      `json:"description"`
	HasEmbeddedLinks       *bool        `json:"has_embedded_links"`
	HasEmbeddedPhone       *bool        `json:"has_embedded_phone"`
	IsExternallyRegistered *bool        `json:"is_externally_registered"`
	MessageSamples         []string     `json:"message_samples"`
	MessagingServiceSid    *string      `json:"messaging_service_sid"`
	Mock                   *bool        `json:"mock"`
	RateLimits             *interface{} `json:"rate_limits"`
	Sid                    *string      `json:"sid"`
	URL                    *string      `json:"url"`
	UsAppToPersonUsecase   *string      `json:"us_app_to_person_usecase"`
}
