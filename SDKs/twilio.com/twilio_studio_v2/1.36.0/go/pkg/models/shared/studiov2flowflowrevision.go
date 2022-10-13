package shared

import (
	"time"
)

type StudioV2FlowFlowRevision struct {
	AccountSid    *string                     `json:"account_sid"`
	CommitMessage *string                     `json:"commit_message"`
	DateCreated   *time.Time                  `json:"date_created"`
	DateUpdated   *time.Time                  `json:"date_updated"`
	Definition    *interface{}                `json:"definition"`
	Errors        []interface{}               `json:"errors"`
	FriendlyName  *string                     `json:"friendly_name"`
	Revision      *int64                      `json:"revision"`
	Sid           *string                     `json:"sid"`
	Status        *FlowRevisionEnumStatusEnum `json:"status"`
	URL           *string                     `json:"url"`
	Valid         *bool                       `json:"valid"`
}
