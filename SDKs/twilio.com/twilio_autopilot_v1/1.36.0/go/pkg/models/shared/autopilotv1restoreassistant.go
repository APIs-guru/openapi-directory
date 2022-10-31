package shared

import (
"time")

type AutopilotV1RestoreAssistant struct {
    AccountSid *string `json:"account_sid,omitempty"`
    CallbackEvents *string `json:"callback_events,omitempty"`
    CallbackURL *string `json:"callback_url,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    DevelopmentStage *string `json:"development_stage,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    LatestModelBuildSid *string `json:"latest_model_build_sid,omitempty"`
    LogQueries *bool `json:"log_queries,omitempty"`
    NeedsModelBuild *bool `json:"needs_model_build,omitempty"`
    Sid *string `json:"sid,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    
}

