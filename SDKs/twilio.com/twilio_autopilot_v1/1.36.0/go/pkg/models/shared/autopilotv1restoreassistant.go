package shared

import (
	"time"
)

type AutopilotV1RestoreAssistant struct {
	AccountSid          *string    `json:"account_sid"`
	CallbackEvents      *string    `json:"callback_events"`
	CallbackURL         *string    `json:"callback_url"`
	DateCreated         *time.Time `json:"date_created"`
	DateUpdated         *time.Time `json:"date_updated"`
	DevelopmentStage    *string    `json:"development_stage"`
	FriendlyName        *string    `json:"friendly_name"`
	LatestModelBuildSid *string    `json:"latest_model_build_sid"`
	LogQueries          *bool      `json:"log_queries"`
	NeedsModelBuild     *bool      `json:"needs_model_build"`
	Sid                 *string    `json:"sid"`
	UniqueName          *string    `json:"unique_name"`
}
