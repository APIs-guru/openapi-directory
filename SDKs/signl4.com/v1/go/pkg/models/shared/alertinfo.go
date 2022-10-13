package shared

import (
	"time"
)

type AlertInfo struct {
	Annotations     []AlertAnnotationInfo     `json:"annotations"`
	Attachments     []AlertAttachment         `json:"attachments"`
	Category        *string                   `json:"category"`
	CategoryID      *string                   `json:"categoryId"`
	EventID         *string                   `json:"eventId"`
	EventSourceID   *string                   `json:"eventSourceId"`
	EventSourceType *int32                    `json:"eventSourceType"`
	Flags           *int32                    `json:"flags"`
	History         *AlertHistoryInfoDetailed `json:"history"`
	ID              *string                   `json:"id"`
	LastModified    *time.Time                `json:"lastModified"`
	Parameters      []EventParameterInfo      `json:"parameters"`
	Severity        *int32                    `json:"severity"`
	Status          *int32                    `json:"status"`
	SubscriptionID  *string                   `json:"subscriptionId"`
	TeamID          *string                   `json:"teamId"`
	Text            *string                   `json:"text"`
	Title           *string                   `json:"title"`
}
