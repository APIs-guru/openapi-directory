package shared

import (
	"time"
)

type VideoV1RecordingStatusCallbackMethodEnum string

const (
	VideoV1RecordingStatusCallbackMethodEnumHead   VideoV1RecordingStatusCallbackMethodEnum = "HEAD"
	VideoV1RecordingStatusCallbackMethodEnumGet    VideoV1RecordingStatusCallbackMethodEnum = "GET"
	VideoV1RecordingStatusCallbackMethodEnumPost   VideoV1RecordingStatusCallbackMethodEnum = "POST"
	VideoV1RecordingStatusCallbackMethodEnumPatch  VideoV1RecordingStatusCallbackMethodEnum = "PATCH"
	VideoV1RecordingStatusCallbackMethodEnumPut    VideoV1RecordingStatusCallbackMethodEnum = "PUT"
	VideoV1RecordingStatusCallbackMethodEnumDelete VideoV1RecordingStatusCallbackMethodEnum = "DELETE"
)

type VideoV1Recording struct {
	AccountSid            *string                                   `json:"account_sid"`
	Codec                 *RecordingEnumCodecEnum                   `json:"codec"`
	ContainerFormat       *RecordingEnumFormatEnum                  `json:"container_format"`
	DateCreated           *time.Time                                `json:"date_created"`
	Duration              *int64                                    `json:"duration"`
	GroupingSids          *interface{}                              `json:"grouping_sids"`
	Links                 map[string]interface{}                    `json:"links"`
	MediaExternalLocation *string                                   `json:"media_external_location"`
	Offset                *int64                                    `json:"offset"`
	Sid                   *string                                   `json:"sid"`
	Size                  *int64                                    `json:"size"`
	SourceSid             *string                                   `json:"source_sid"`
	Status                *RecordingEnumStatusEnum                  `json:"status"`
	StatusCallback        *string                                   `json:"status_callback"`
	StatusCallbackMethod  *VideoV1RecordingStatusCallbackMethodEnum `json:"status_callback_method"`
	TrackName             *string                                   `json:"track_name"`
	Type                  *RecordingEnumTypeEnum                    `json:"type"`
	URL                   *string                                   `json:"url"`
}
