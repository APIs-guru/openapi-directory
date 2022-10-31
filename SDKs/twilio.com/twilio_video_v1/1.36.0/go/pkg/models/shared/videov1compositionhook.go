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
	AccountSid           *string                                         `json:"account_sid,omitempty"`
	AudioSources         []string                                        `json:"audio_sources,omitempty"`
	AudioSourcesExcluded []string                                        `json:"audio_sources_excluded,omitempty"`
	DateCreated          *time.Time                                      `json:"date_created,omitempty"`
	DateUpdated          *time.Time                                      `json:"date_updated,omitempty"`
	Enabled              *bool                                           `json:"enabled,omitempty"`
	Format               *CompositionHookEnumFormatEnum                  `json:"format,omitempty"`
	FriendlyName         *string                                         `json:"friendly_name,omitempty"`
	Resolution           *string                                         `json:"resolution,omitempty"`
	Sid                  *string                                         `json:"sid,omitempty"`
	StatusCallback       *string                                         `json:"status_callback,omitempty"`
	StatusCallbackMethod *VideoV1CompositionHookStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	Trim                 *bool                                           `json:"trim,omitempty"`
	URL                  *string                                         `json:"url,omitempty"`
	VideoLayout          *interface{}                                    `json:"video_layout,omitempty"`
}
