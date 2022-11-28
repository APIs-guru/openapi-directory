package shared

import (
	"time"
)

type MessagingV1ServiceUsAppToPerson struct {
	AccountSid             *string      `json:"account_sid,omitempty"`
	BrandRegistrationSid   *string      `json:"brand_registration_sid,omitempty"`
	CampaignID             *string      `json:"campaign_id,omitempty"`
	CampaignStatus         *string      `json:"campaign_status,omitempty"`
	DateCreated            *time.Time   `json:"date_created,omitempty"`
	DateUpdated            *time.Time   `json:"date_updated,omitempty"`
	Description            *string      `json:"description,omitempty"`
	HasEmbeddedLinks       *bool        `json:"has_embedded_links,omitempty"`
	HasEmbeddedPhone       *bool        `json:"has_embedded_phone,omitempty"`
	HelpKeywords           []string     `json:"help_keywords,omitempty"`
	HelpMessage            *string      `json:"help_message,omitempty"`
	IsExternallyRegistered *bool        `json:"is_externally_registered,omitempty"`
	MessageFlow            *string      `json:"message_flow,omitempty"`
	MessageSamples         []string     `json:"message_samples,omitempty"`
	MessagingServiceSid    *string      `json:"messaging_service_sid,omitempty"`
	Mock                   *bool        `json:"mock,omitempty"`
	OptInKeywords          []string     `json:"opt_in_keywords,omitempty"`
	OptInMessage           *string      `json:"opt_in_message,omitempty"`
	OptOutKeywords         []string     `json:"opt_out_keywords,omitempty"`
	OptOutMessage          *string      `json:"opt_out_message,omitempty"`
	RateLimits             *interface{} `json:"rate_limits,omitempty"`
	Sid                    *string      `json:"sid,omitempty"`
	URL                    *string      `json:"url,omitempty"`
	UsAppToPersonUsecase   *string      `json:"us_app_to_person_usecase,omitempty"`
}
