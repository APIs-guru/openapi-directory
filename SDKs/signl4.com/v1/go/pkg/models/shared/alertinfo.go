package shared

import (
	"time"
)

type AlertInfo struct {
	Annotations     []AlertAnnotationInfo     `json:"annotations,omitempty"`
	Attachments     []AlertAttachment         `json:"attachments,omitempty"`
	Category        *string                   `json:"category,omitempty"`
	CategoryID      *string                   `json:"categoryId,omitempty"`
	EventID         *string                   `json:"eventId,omitempty"`
	EventSourceID   *string                   `json:"eventSourceId,omitempty"`
	EventSourceType *int32                    `json:"eventSourceType,omitempty"`
	Flags           *int32                    `json:"flags,omitempty"`
	History         *AlertHistoryInfoDetailed `json:"history,omitempty"`
	ID              *string                   `json:"id,omitempty"`
	LastModified    *time.Time                `json:"lastModified,omitempty"`
	Parameters      []EventParameterInfo      `json:"parameters,omitempty"`
	Severity        *int32                    `json:"severity,omitempty"`
	Status          *int32                    `json:"status,omitempty"`
	SubscriptionID  *string                   `json:"subscriptionId,omitempty"`
	TeamID          *string                   `json:"teamId,omitempty"`
	Text            *string                   `json:"text,omitempty"`
	Title           *string                   `json:"title,omitempty"`
}
