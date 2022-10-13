package shared

import (
	"time"
)

type VideoV1CompositionHookStatusCallbackMethodEnum string

const (
	VideoV1CompositionHookStatusCallbackMethodEnumHead   VideoV1CompositionHookStatusCallbackMethodEnum = "HEAD"
	VideoV1CompositionHookStatusCallbackMethodEnumGet    VideoV1CompositionHookStatusCallbackMethodEnum = "GET"
	VideoV1CompositionHookStatusCallbackMethodEnumPost   VideoV1CompositionHookStatusCallbackMethodEnum = "POST"
	VideoV1CompositionHookStatusCallbackMethodEnumPatch  VideoV1CompositionHookStatusCallbackMethodEnum = "PATCH"
	VideoV1CompositionHookStatusCallbackMethodEnumPut    VideoV1CompositionHookStatusCallbackMethodEnum = "PUT"
	VideoV1CompositionHookStatusCallbackMethodEnumDelete VideoV1CompositionHookStatusCallbackMethodEnum = "DELETE"
)

type VideoV1CompositionHook struct {
	AccountSid           *string                                         `json:"account_sid"`
	AudioSources         []string                                        `json:"audio_sources"`
	AudioSourcesExcluded []string                                        `json:"audio_sources_excluded"`
	DateCreated          *time.Time                                      `json:"date_created"`
	DateUpdated          *time.Time                                      `json:"date_updated"`
	Enabled              *bool                                           `json:"enabled"`
	Format               *CompositionHookEnumFormatEnum                  `json:"format"`
	FriendlyName         *string                                         `json:"friendly_name"`
	Resolution           *string                                         `json:"resolution"`
	Sid                  *string                                         `json:"sid"`
	StatusCallback       *string                                         `json:"status_callback"`
	StatusCallbackMethod *VideoV1CompositionHookStatusCallbackMethodEnum `json:"status_callback_method"`
	Trim                 *bool                                           `json:"trim"`
	URL                  *string                                         `json:"url"`
	VideoLayout          *interface{}                                    `json:"video_layout"`
}
