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
	AccountSid           *string                                        `json:"account_sid"`
	DateCreated          *time.Time                                     `json:"date_created"`
	DateUpdated          *time.Time                                     `json:"date_updated"`
	EndedReason          *PlayerStreamerEnumEndedReasonEnum             `json:"ended_reason"`
	Links                map[string]interface{}                         `json:"links"`
	MaxDuration          *int64                                         `json:"max_duration"`
	Sid                  *string                                        `json:"sid"`
	Status               *PlayerStreamerEnumStatusEnum                  `json:"status"`
	StatusCallback       *string                                        `json:"status_callback"`
	StatusCallbackMethod *MediaV1PlayerStreamerStatusCallbackMethodEnum `json:"status_callback_method"`
	URL                  *string                                        `json:"url"`
	Video                *bool                                          `json:"video"`
}
