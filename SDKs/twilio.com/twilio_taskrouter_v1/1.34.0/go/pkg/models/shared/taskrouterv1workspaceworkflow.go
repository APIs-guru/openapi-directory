package shared

import (
	"time"
)

type TaskrouterV1WorkspaceWorkflow struct {
	AccountSid                    *string                `json:"account_sid"`
	AssignmentCallbackURL         *string                `json:"assignment_callback_url"`
	Configuration                 *string                `json:"configuration"`
	DateCreated                   *time.Time             `json:"date_created"`
	DateUpdated                   *time.Time             `json:"date_updated"`
	DocumentContentType           *string                `json:"document_content_type"`
	FallbackAssignmentCallbackURL *string                `json:"fallback_assignment_callback_url"`
	FriendlyName                  *string                `json:"friendly_name"`
	Links                         map[string]interface{} `json:"links"`
	Sid                           *string                `json:"sid"`
	TaskReservationTimeout        *int64                 `json:"task_reservation_timeout"`
	URL                           *string                `json:"url"`
	WorkspaceSid                  *string                `json:"workspace_sid"`
}
