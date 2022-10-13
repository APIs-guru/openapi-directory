package shared

import (
	"time"
)

type MediaV1MediaRecordingStatusCallbackMethodEnum string

const (
	MediaV1MediaRecordingStatusCallbackMethodEnumHead   MediaV1MediaRecordingStatusCallbackMethodEnum = "HEAD"
	MediaV1MediaRecordingStatusCallbackMethodEnumGet    MediaV1MediaRecordingStatusCallbackMethodEnum = "GET"
	MediaV1MediaRecordingStatusCallbackMethodEnumPost   MediaV1MediaRecordingStatusCallbackMethodEnum = "POST"
	MediaV1MediaRecordingStatusCallbackMethodEnumPatch  MediaV1MediaRecordingStatusCallbackMethodEnum = "PATCH"
	MediaV1MediaRecordingStatusCallbackMethodEnumPut    MediaV1MediaRecordingStatusCallbackMethodEnum = "PUT"
	MediaV1MediaRecordingStatusCallbackMethodEnumDelete MediaV1MediaRecordingStatusCallbackMethodEnum = "DELETE"
)

type MediaV1MediaRecording struct {
	AccountSid           *string                                        `json:"account_sid"`
	DateCreated          *time.Time                                     `json:"date_created"`
	DateUpdated          *time.Time                                     `json:"date_updated"`
	Duration             *int64                                         `json:"duration"`
	Format               *MediaRecordingEnumFormatEnum                  `json:"format"`
	Links                map[string]interface{}                         `json:"links"`
	MediaSize            *int64                                         `json:"media_size"`
	ProcessorSid         *string                                        `json:"processor_sid"`
	Resolution           *string                                        `json:"resolution"`
	Sid                  *string                                        `json:"sid"`
	SourceSid            *string                                        `json:"source_sid"`
	Status               *MediaRecordingEnumStatusEnum                  `json:"status"`
	StatusCallback       *string                                        `json:"status_callback"`
	StatusCallbackMethod *MediaV1MediaRecordingStatusCallbackMethodEnum `json:"status_callback_method"`
	URL                  *string                                        `json:"url"`
}
