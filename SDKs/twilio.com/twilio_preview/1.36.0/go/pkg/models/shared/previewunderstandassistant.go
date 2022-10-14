package shared

import (
	"time"
)

type PreviewUnderstandAssistant struct {
	AccountSid          *string                `json:"account_sid,omitempty"`
	CallbackEvents      *string                `json:"callback_events,omitempty"`
	CallbackURL         *string                `json:"callback_url,omitempty"`
	DateCreated         *time.Time             `json:"date_created,omitempty"`
	DateUpdated         *time.Time             `json:"date_updated,omitempty"`
	FriendlyName        *string                `json:"friendly_name,omitempty"`
	LatestModelBuildSid *string                `json:"latest_model_build_sid,omitempty"`
	Links               map[string]interface{} `json:"links,omitempty"`
	LogQueries          *bool                  `json:"log_queries,omitempty"`
	Sid                 *string                `json:"sid,omitempty"`
	UniqueName          *string                `json:"unique_name,omitempty"`
	URL                 *string                `json:"url,omitempty"`
}
