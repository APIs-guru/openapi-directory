package shared

import (
	"time"
)

type PreviewUnderstandAssistant struct {
	AccountSid          *string                `json:"account_sid"`
	CallbackEvents      *string                `json:"callback_events"`
	CallbackURL         *string                `json:"callback_url"`
	DateCreated         *time.Time             `json:"date_created"`
	DateUpdated         *time.Time             `json:"date_updated"`
	FriendlyName        *string                `json:"friendly_name"`
	LatestModelBuildSid *string                `json:"latest_model_build_sid"`
	Links               map[string]interface{} `json:"links"`
	LogQueries          *bool                  `json:"log_queries"`
	Sid                 *string                `json:"sid"`
	UniqueName          *string                `json:"unique_name"`
	URL                 *string                `json:"url"`
}
