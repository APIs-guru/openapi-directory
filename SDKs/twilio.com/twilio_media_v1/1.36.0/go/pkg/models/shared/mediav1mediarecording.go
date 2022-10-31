package shared

import (
"time")


type MediaV1MediaRecordingStatusCallbackMethodEnum string

const (
    MediaV1MediaRecordingStatusCallbackMethodEnumHead MediaV1MediaRecordingStatusCallbackMethodEnum = "HEAD"
MediaV1MediaRecordingStatusCallbackMethodEnumGet MediaV1MediaRecordingStatusCallbackMethodEnum = "GET"
MediaV1MediaRecordingStatusCallbackMethodEnumPost MediaV1MediaRecordingStatusCallbackMethodEnum = "POST"
MediaV1MediaRecordingStatusCallbackMethodEnumPatch MediaV1MediaRecordingStatusCallbackMethodEnum = "PATCH"
MediaV1MediaRecordingStatusCallbackMethodEnumPut MediaV1MediaRecordingStatusCallbackMethodEnum = "PUT"
MediaV1MediaRecordingStatusCallbackMethodEnumDelete MediaV1MediaRecordingStatusCallbackMethodEnum = "DELETE"
)


type MediaV1MediaRecording struct {
    AccountSid *string `json:"account_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    Format *MediaRecordingEnumFormatEnum `json:"format,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MediaSize *int64 `json:"media_size,omitempty"`
    ProcessorSid *string `json:"processor_sid,omitempty"`
    Resolution *string `json:"resolution,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SourceSid *string `json:"source_sid,omitempty"`
    Status *MediaRecordingEnumStatusEnum `json:"status,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    StatusCallbackMethod *MediaV1MediaRecordingStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

