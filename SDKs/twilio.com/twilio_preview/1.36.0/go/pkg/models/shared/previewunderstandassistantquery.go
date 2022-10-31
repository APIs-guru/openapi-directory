package shared

import (
"time")

type PreviewUnderstandAssistantQuery struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AssistantSid *string `json:"assistant_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Language *string `json:"language,omitempty"`
    ModelBuildSid *string `json:"model_build_sid,omitempty"`
    Query *string `json:"query,omitempty"`
    Results *interface{} `json:"results,omitempty"`
    SampleSid *string `json:"sample_sid,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SourceChannel *string `json:"source_channel,omitempty"`
    Status *string `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

