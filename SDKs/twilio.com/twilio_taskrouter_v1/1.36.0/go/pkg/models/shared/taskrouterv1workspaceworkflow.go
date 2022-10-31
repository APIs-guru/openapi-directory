package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkflow struct {
	AccountSid                    *string                `json:"account_sid,omitempty"`
	AssignmentCallbackURL         *string                `json:"assignment_callback_url,omitempty"`
	Configuration                 *string                `json:"configuration,omitempty"`
	DateCreated                   *time.Time             `json:"date_created,omitempty"`
	DateUpdated                   *time.Time             `json:"date_updated,omitempty"`
	DocumentContentType           *string                `json:"document_content_type,omitempty"`
	FallbackAssignmentCallbackURL *string                `json:"fallback_assignment_callback_url,omitempty"`
	FriendlyName                  *string                `json:"friendly_name,omitempty"`
	Links                         map[string]interface{} `json:"links,omitempty"`
	Sid                           *string                `json:"sid,omitempty"`
	TaskReservationTimeout        *int64                 `json:"task_reservation_timeout,omitempty"`
	URL                           *string                `json:"url,omitempty"`
	WorkspaceSid                  *string                `json:"workspace_sid,omitempty"`
}
