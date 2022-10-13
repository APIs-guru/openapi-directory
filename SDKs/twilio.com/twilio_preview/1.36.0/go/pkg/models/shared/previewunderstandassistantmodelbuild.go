package shared

import (
	"time"
)

type PreviewUnderstandAssistantModelBuild struct {
	AccountSid    *string                   `json:"account_sid"`
	AssistantSid  *string                   `json:"assistant_sid"`
	BuildDuration *int64                    `json:"build_duration"`
	DateCreated   *time.Time                `json:"date_created"`
	DateUpdated   *time.Time                `json:"date_updated"`
	ErrorCode     *int64                    `json:"error_code"`
	Sid           *string                   `json:"sid"`
	Status        *ModelBuildEnumStatusEnum `json:"status"`
	UniqueName    *string                   `json:"unique_name"`
	URL           *string                   `json:"url"`
}
