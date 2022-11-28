package operations

import (
	"openapi/pkg/models/shared"
)

type PostCallsRequestBodyOptionsPlayAudio struct {
	AnnouncementID *string `json:"announcement_id,omitempty"`
}

type PostCallsRequestBodyOptions struct {
	ALegCallerID *string                                `json:"a_leg_caller_id,omitempty"`
	ALegOnly     *int64                                 `json:"a_leg_only,omitempty"`
	CancelKey    *int64                                 `json:"cancel_key,omitempty"`
	ConnectKey   *int64                                 `json:"connect_key,omitempty"`
	PlayAudio    []PostCallsRequestBodyOptionsPlayAudio `json:"play_audio,omitempty"`
}

type PostCallsRequestBody struct {
	AnnouncementAt       *string                      `json:"announcement_at,omitempty"`
	AnnouncementID       *string                      `json:"announcement_id,omitempty"`
	CallerID             string                       `json:"caller_id"`
	From                 string                       `json:"from"`
	HangupAnnouncementID *string                      `json:"hangup_announcement_id,omitempty"`
	HangupAt             *string                      `json:"hangup_at,omitempty"`
	Options              *PostCallsRequestBodyOptions `json:"options,omitempty"`
	To                   string                       `json:"to"`
}

type PostCalls202ApplicationJSON struct {
	Call     *string `json:"Call,omitempty"`
	Location *string `json:"Location,omitempty"`
}

type PostCallsRequest struct {
	Request PostCallsRequestBody `request:"mediaType=application/json"`
}

type PostCallsResponse struct {
	ContentType                                                   string
	Headers                                                       map[string][]string
	PostCalls202ApplicationJSONObject                             *PostCalls202ApplicationJSON
	StatusCode                                                    int64
	OneannouncementsPostResponses400ContentApplication1jsonSchema *shared.OneannouncementsPostResponses400ContentApplication1jsonSchema
	OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema
}
