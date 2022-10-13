package operations

import (
	"openapi/pkg/models/shared"
)

type EditChannelPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type EditChannelRequestBodyPrivacyEnum string

const (
	EditChannelRequestBodyPrivacyEnumAnybody    EditChannelRequestBodyPrivacyEnum = "anybody"
	EditChannelRequestBodyPrivacyEnumModerators EditChannelRequestBodyPrivacyEnum = "moderators"
	EditChannelRequestBodyPrivacyEnumUsers      EditChannelRequestBodyPrivacyEnum = "users"
)

type EditChannelRequestBody struct {
	Description *string                            `json:"description"`
	Link        *string                            `json:"link"`
	Name        *string                            `json:"name"`
	Privacy     *EditChannelRequestBodyPrivacyEnum `json:"privacy"`
}

type EditChannelSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditChannelRequest struct {
	PathParams EditChannelPathParams
	Request    *EditChannelRequestBody `request:"mediaType=application/vnd.vimeo.channel+json"`
	Security   EditChannelSecurity
}

type EditChannelResponse struct {
	ContentType string
	StatusCode  int64
	Channel     *shared.Channel
	LegacyError *shared.LegacyError
}
