package operations

import (
	"openapi/pkg/models/shared"
)

type PostCallsRequestBodyOptionsPlayAudio struct {
	AnnouncementID *string `json:"announcement_id"`
}

type PostCallsRequestBodyOptions struct {
	ALegCallerID *string                                `json:"a_leg_caller_id"`
	ALegOnly     *int64                                 `json:"a_leg_only"`
	CancelKey    *int64                                 `json:"cancel_key"`
	ConnectKey   *int64                                 `json:"connect_key"`
	PlayAudio    []PostCallsRequestBodyOptionsPlayAudio `json:"play_audio"`
}

type PostCallsRequestBody struct {
	AnnouncementAt       *string                      `json:"announcement_at"`
	AnnouncementID       *string                      `json:"announcement_id"`
	CallerID             string                       `json:"caller_id"`
	From                 string                       `json:"from"`
	HangupAnnouncementID *string                      `json:"hangup_announcement_id"`
	HangupAt             *string                      `json:"hangup_at"`
	Options              *PostCallsRequestBodyOptions `json:"options"`
	To                   string                       `json:"to"`
}

type PostCallsRequest struct {
	Request PostCallsRequestBody `request:"mediaType=application/json"`
}

type PostCalls202ApplicationJSON struct {
	Call     *string `json:"Call"`
	Location *string `json:"Location"`
}

type PostCallsResponse struct {
	ContentType                                                   string
	Headers                                                       map[string][]string
	PostCalls202ApplicationJSONObject                             *PostCalls202ApplicationJSON
	StatusCode                                                    int64
	OneannouncementsPostResponses400ContentApplication1jsonSchema *shared.OneannouncementsPostResponses400ContentApplication1jsonSchema
	OneannouncementsPostResponses403ContentApplication1jsonSchema *shared.OneannouncementsPostResponses403ContentApplication1jsonSchema
}
