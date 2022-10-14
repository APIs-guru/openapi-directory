package shared

import (
	"time"
)

type StudioV2FlowFlowRevision struct {
	AccountSid    *string                     `json:"account_sid,omitempty"`
	CommitMessage *string                     `json:"commit_message,omitempty"`
	DateCreated   *time.Time                  `json:"date_created,omitempty"`
	DateUpdated   *time.Time                  `json:"date_updated,omitempty"`
	Definition    *interface{}                `json:"definition,omitempty"`
	Errors        []interface{}               `json:"errors,omitempty"`
	FriendlyName  *string                     `json:"friendly_name,omitempty"`
	Revision      *int64                      `json:"revision,omitempty"`
	Sid           *string                     `json:"sid,omitempty"`
	Status        *FlowRevisionEnumStatusEnum `json:"status,omitempty"`
	URL           *string                     `json:"url,omitempty"`
	Valid         *bool                       `json:"valid,omitempty"`
}
