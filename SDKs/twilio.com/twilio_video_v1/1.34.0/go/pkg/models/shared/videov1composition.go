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
	AccountSid            *string                                     `json:"account_sid"`
	AudioSources          []string                                    `json:"audio_sources"`
	AudioSourcesExcluded  []string                                    `json:"audio_sources_excluded"`
	Bitrate               *int64                                      `json:"bitrate"`
	DateCompleted         *time.Time                                  `json:"date_completed"`
	DateCreated           *time.Time                                  `json:"date_created"`
	DateDeleted           *time.Time                                  `json:"date_deleted"`
	Duration              *int64                                      `json:"duration"`
	Format                *CompositionEnumFormatEnum                  `json:"format"`
	Links                 map[string]interface{}                      `json:"links"`
	MediaExternalLocation *string                                     `json:"media_external_location"`
	Resolution            *string                                     `json:"resolution"`
	RoomSid               *string                                     `json:"room_sid"`
	Sid                   *string                                     `json:"sid"`
	Size                  *int64                                      `json:"size"`
	Status                *CompositionEnumStatusEnum                  `json:"status"`
	StatusCallback        *string                                     `json:"status_callback"`
	StatusCallbackMethod  *VideoV1CompositionStatusCallbackMethodEnum `json:"status_callback_method"`
	Trim                  *bool                                       `json:"trim"`
	URL                   *string                                     `json:"url"`
	VideoLayout           *interface{}                                `json:"video_layout"`
}
