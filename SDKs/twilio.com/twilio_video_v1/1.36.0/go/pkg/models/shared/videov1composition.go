package shared

import (
	"time"
)

type VideoV1CompositionStatusCallbackMethodEnum string

const (
	VideoV1CompositionStatusCallbackMethodEnumHead   VideoV1CompositionStatusCallbackMethodEnum = "HEAD"
	VideoV1CompositionStatusCallbackMethodEnumGet    VideoV1CompositionStatusCallbackMethodEnum = "GET"
	VideoV1CompositionStatusCallbackMethodEnumPost   VideoV1CompositionStatusCallbackMethodEnum = "POST"
	VideoV1CompositionStatusCallbackMethodEnumPatch  VideoV1CompositionStatusCallbackMethodEnum = "PATCH"
	VideoV1CompositionStatusCallbackMethodEnumPut    VideoV1CompositionStatusCallbackMethodEnum = "PUT"
	VideoV1CompositionStatusCallbackMethodEnumDelete VideoV1CompositionStatusCallbackMethodEnum = "DELETE"
)

type VideoV1Composition struct {
	AccountSid            *string                                     `json:"account_sid,omitempty"`
	AudioSources          []string                                    `json:"audio_sources,omitempty"`
	AudioSourcesExcluded  []string                                    `json:"audio_sources_excluded,omitempty"`
	Bitrate               *int64                                      `json:"bitrate,omitempty"`
	DateCompleted         *time.Time                                  `json:"date_completed,omitempty"`
	DateCreated           *time.Time                                  `json:"date_created,omitempty"`
	DateDeleted           *time.Time                                  `json:"date_deleted,omitempty"`
	Duration              *int64                                      `json:"duration,omitempty"`
	Format                *CompositionEnumFormatEnum                  `json:"format,omitempty"`
	Links                 map[string]interface{}                      `json:"links,omitempty"`
	MediaExternalLocation *string                                     `json:"media_external_location,omitempty"`
	Resolution            *string                                     `json:"resolution,omitempty"`
	RoomSid               *string                                     `json:"room_sid,omitempty"`
	Sid                   *string                                     `json:"sid,omitempty"`
	Size                  *int64                                      `json:"size,omitempty"`
	Status                *CompositionEnumStatusEnum                  `json:"status,omitempty"`
	StatusCallback        *string                                     `json:"status_callback,omitempty"`
	StatusCallbackMethod  *VideoV1CompositionStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	Trim                  *bool                                       `json:"trim,omitempty"`
	URL                   *string                                     `json:"url,omitempty"`
	VideoLayout           *interface{}                                `json:"video_layout,omitempty"`
}
