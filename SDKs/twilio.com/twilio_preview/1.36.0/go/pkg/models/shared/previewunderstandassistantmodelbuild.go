package shared

import (
"time")

type PreviewUnderstandAssistantModelBuild struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AssistantSid *string `json:"assistant_sid,omitempty"`
    BuildDuration *int64 `json:"build_duration,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    ErrorCode *int64 `json:"error_code,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *ModelBuildEnumStatusEnum `json:"status,omitempty"`
    UniqueName *string `json:"unique_name,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

