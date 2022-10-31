package shared

import (
"time")


type VideoV1RecordingStatusCallbackMethodEnum string

const (
    VideoV1RecordingStatusCallbackMethodEnumHead VideoV1RecordingStatusCallbackMethodEnum = "HEAD"
VideoV1RecordingStatusCallbackMethodEnumGet VideoV1RecordingStatusCallbackMethodEnum = "GET"
VideoV1RecordingStatusCallbackMethodEnumPost VideoV1RecordingStatusCallbackMethodEnum = "POST"
VideoV1RecordingStatusCallbackMethodEnumPatch VideoV1RecordingStatusCallbackMethodEnum = "PATCH"
VideoV1RecordingStatusCallbackMethodEnumPut VideoV1RecordingStatusCallbackMethodEnum = "PUT"
VideoV1RecordingStatusCallbackMethodEnumDelete VideoV1RecordingStatusCallbackMethodEnum = "DELETE"
)


type VideoV1Recording struct {
    AccountSid *string `json:"account_sid,omitempty"`
    Codec *RecordingEnumCodecEnum `json:"codec,omitempty"`
    ContainerFormat *RecordingEnumFormatEnum `json:"container_format,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    Duration *int64 `json:"duration,omitempty"`
    GroupingSids *interface{} `json:"grouping_sids,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    MediaExternalLocation *string `json:"media_external_location,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Size *int64 `json:"size,omitempty"`
    SourceSid *string `json:"source_sid,omitempty"`
    Status *RecordingEnumStatusEnum `json:"status,omitempty"`
    StatusCallback *string `json:"status_callback,omitempty"`
    StatusCallbackMethod *VideoV1RecordingStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
    TrackName *string `json:"track_name,omitempty"`
    Type *RecordingEnumTypeEnum `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

