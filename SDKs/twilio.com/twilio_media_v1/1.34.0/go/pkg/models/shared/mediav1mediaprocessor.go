package shared

import (
	"time"
)

type MediaV1MediaProcessorStatusCallbackMethodEnum string

const (
	MediaV1MediaProcessorStatusCallbackMethodEnumHead   MediaV1MediaProcessorStatusCallbackMethodEnum = "HEAD"
	MediaV1MediaProcessorStatusCallbackMethodEnumGet    MediaV1MediaProcessorStatusCallbackMethodEnum = "GET"
	MediaV1MediaProcessorStatusCallbackMethodEnumPost   MediaV1MediaProcessorStatusCallbackMethodEnum = "POST"
	MediaV1MediaProcessorStatusCallbackMethodEnumPatch  MediaV1MediaProcessorStatusCallbackMethodEnum = "PATCH"
	MediaV1MediaProcessorStatusCallbackMethodEnumPut    MediaV1MediaProcessorStatusCallbackMethodEnum = "PUT"
	MediaV1MediaProcessorStatusCallbackMethodEnumDelete MediaV1MediaProcessorStatusCallbackMethodEnum = "DELETE"
)

type MediaV1MediaProcessor struct {
	AccountSid           *string                                        `json:"account_sid"`
	DateCreated          *time.Time                                     `json:"date_created"`
	DateUpdated          *time.Time                                     `json:"date_updated"`
	EndedReason          *string                                        `json:"ended_reason"`
	Extension            *string                                        `json:"extension"`
	ExtensionContext     *string                                        `json:"extension_context"`
	MaxDuration          *int64                                         `json:"max_duration"`
	Sid                  *string                                        `json:"sid"`
	Status               *MediaProcessorEnumStatusEnum                  `json:"status"`
	StatusCallback       *string                                        `json:"status_callback"`
	StatusCallbackMethod *MediaV1MediaProcessorStatusCallbackMethodEnum `json:"status_callback_method"`
	URL                  *string                                        `json:"url"`
}
