package shared

import (
	"time"
)

type MediaV1PlayerStreamerStatusCallbackMethodEnum string

const (
	MediaV1PlayerStreamerStatusCallbackMethodEnumHead   MediaV1PlayerStreamerStatusCallbackMethodEnum = "HEAD"
	MediaV1PlayerStreamerStatusCallbackMethodEnumGet    MediaV1PlayerStreamerStatusCallbackMethodEnum = "GET"
	MediaV1PlayerStreamerStatusCallbackMethodEnumPost   MediaV1PlayerStreamerStatusCallbackMethodEnum = "POST"
	MediaV1PlayerStreamerStatusCallbackMethodEnumPatch  MediaV1PlayerStreamerStatusCallbackMethodEnum = "PATCH"
	MediaV1PlayerStreamerStatusCallbackMethodEnumPut    MediaV1PlayerStreamerStatusCallbackMethodEnum = "PUT"
	MediaV1PlayerStreamerStatusCallbackMethodEnumDelete MediaV1PlayerStreamerStatusCallbackMethodEnum = "DELETE"
)

type MediaV1PlayerStreamer struct {
	AccountSid           *string                                        `json:"account_sid,omitempty"`
	DateCreated          *time.Time                                     `json:"date_created,omitempty"`
	DateUpdated          *time.Time                                     `json:"date_updated,omitempty"`
	EndedReason          *PlayerStreamerEnumEndedReasonEnum             `json:"ended_reason,omitempty"`
	Links                map[string]interface{}                         `json:"links,omitempty"`
	MaxDuration          *int64                                         `json:"max_duration,omitempty"`
	Sid                  *string                                        `json:"sid,omitempty"`
	Status               *PlayerStreamerEnumStatusEnum                  `json:"status,omitempty"`
	StatusCallback       *string                                        `json:"status_callback,omitempty"`
	StatusCallbackMethod *MediaV1PlayerStreamerStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	URL                  *string                                        `json:"url,omitempty"`
	Video                *bool                                          `json:"video,omitempty"`
}
